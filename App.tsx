
import React, { useState, useEffect } from 'react';
import { AppState, UserResponseData } from './types';
import Intro from './components/Intro';
import ProposalGame from './components/ProposalGame';
import Celebration from './components/Celebration';
import LoveLetter from './components/LoveLetter';
import EmotionalReflection from './components/EmotionalReflection';
import PersonaPicker from './components/PersonaPicker';
import DatePicker from './components/DatePicker';
import BirthdayGift from './components/BirthdayGift';
import ThePromise from './components/ThePromise';
import PersonalReveal from './components/PersonalReveal';
import FinalScreen from './components/FinalScreen';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppState>(AppState.INTRO);
  const [hearts, setHearts] = useState<{ id: number, x: number, size: number, delay: number }[]>([]);
  
  const [formData, setFormData] = useState<UserResponseData>({
    emotion: '',
    oneWord: '',
    character: '',
    favLine: '',
    selectedDate: '',
    birthdayGift: '',
    heartContent: ''
  });

  const goBack = () => {
    switch (currentStep) {
      case AppState.PROPOSAL:
        setCurrentStep(AppState.INTRO);
        break;
      case AppState.CELEBRATION:
        setCurrentStep(AppState.PROPOSAL);
        break;
      case AppState.LOVE_LETTER:
        setCurrentStep(AppState.CELEBRATION);
        break;
      case AppState.EMOTION_REFLECT:
        setCurrentStep(AppState.LOVE_LETTER);
        break;
      case AppState.PERSONA_PICKER:
        setCurrentStep(AppState.EMOTION_REFLECT);
        break;
      case AppState.DATE_PICKER:
        setCurrentStep(AppState.PERSONA_PICKER);
        break;
      case AppState.BIRTHDAY_GIFT:
        setCurrentStep(AppState.DATE_PICKER);
        break;
      case AppState.THE_PROMISE:
        setCurrentStep(AppState.BIRTHDAY_GIFT);
        break;
      case AppState.PERSONAL_REVEAL:
        setCurrentStep(AppState.THE_PROMISE);
        break;
      case AppState.FINAL:
        setCurrentStep(AppState.PERSONAL_REVEAL);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-20), 
        { 
          id: Date.now(), 
          x: Math.random() * 100, 
          size: Math.random() * (32 - 12) + 12,
          delay: Math.random() * 2
        }
      ]);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderStep = () => {
    switch (currentStep) {
      case AppState.INTRO:
        return <Intro onComplete={() => setCurrentStep(AppState.PROPOSAL)} />;
      case AppState.PROPOSAL:
        return <ProposalGame onYes={() => setCurrentStep(AppState.CELEBRATION)} onBack={goBack} />;
      case AppState.CELEBRATION:
        return <Celebration onNext={() => setCurrentStep(AppState.LOVE_LETTER)} onBack={goBack} />;
      case AppState.LOVE_LETTER:
        return <LoveLetter onNext={() => setCurrentStep(AppState.EMOTION_REFLECT)} onBack={goBack} />;
      case AppState.EMOTION_REFLECT:
        return <EmotionalReflection onNext={(emotion, oneWord) => {
          setFormData(prev => ({ ...prev, emotion, oneWord }));
          setCurrentStep(AppState.PERSONA_PICKER);
        }} onBack={goBack} />;
      case AppState.PERSONA_PICKER:
        return <PersonaPicker onNext={(character, favLine) => {
          setFormData(prev => ({ ...prev, character, favLine }));
          setCurrentStep(AppState.DATE_PICKER);
        }} onBack={goBack} />;
      case AppState.DATE_PICKER:
        return <DatePicker onNext={(date) => {
          setFormData(prev => ({ ...prev, selectedDate: date }));
          setCurrentStep(AppState.BIRTHDAY_GIFT);
        }} onBack={goBack} />;
      case AppState.BIRTHDAY_GIFT:
        return <BirthdayGift onNext={(gift) => {
          setFormData(prev => ({ ...prev, birthdayGift: gift }));
          setCurrentStep(AppState.THE_PROMISE);
        }} onBack={goBack} />;
      case AppState.THE_PROMISE:
        return <ThePromise onNext={(heartContent) => {
          setFormData(prev => ({ ...prev, heartContent }));
          setCurrentStep(AppState.PERSONAL_REVEAL);
        }} onBack={goBack} />;
      case AppState.PERSONAL_REVEAL:
        return <PersonalReveal onComplete={() => setCurrentStep(AppState.FINAL)} onBack={goBack} />;
      case AppState.FINAL:
        return <FinalScreen responseData={formData} onBack={goBack} />;
      default:
        return <Intro onComplete={() => setCurrentStep(AppState.PROPOSAL)} />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-black via-[#1a0505] to-[#2d0a0a]">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-900/10 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>

      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart opacity-10"
          style={{ 
            left: `${heart.x}%`, 
            bottom: '-10%', 
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`
          }}
        >
          {['❤️', '💖', '💗', '💕'][Math.floor(Math.random() * 4)]}
        </div>
      ))}

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        {renderStep()}
      </div>
    </div>
  );
};

export default App;
