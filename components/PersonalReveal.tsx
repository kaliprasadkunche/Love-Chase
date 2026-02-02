
import React from 'react';

interface PersonalRevealProps {
  onComplete: () => void;
  onBack: () => void;
}

const PersonalReveal: React.FC<PersonalRevealProps> = ({ onComplete, onBack }) => {
  const reasons = [
    "I feel completely comfortable with you — in a way I’ve never felt with anyone else. With you, my heart rests.",
    "I believe in the universe and in God, and every day it feels like they are quietly proving that everything happening is meant for us.",
    "That smile of yours — it stays with me long after I’ve seen it.",
    "Your character. I believe that when you hold someone close, you hold them with loyalty and never let them feel alone.",
    "And if I had to describe you, I would say:\n\nPaala buggalu,\npasidi chaayani pasupu putha gavinchina thanuvu,\nbayam tho beydhirey pasi papa lanti kallu,\ntheyrachapa vanti kurulu,\nnatyam lanti nadaka."
  ];

  return (
    <div className="w-full max-w-sm glass p-8 md:p-10 rounded-[3rem] animate-slide-up border border-pink-500/20 shadow-2xl relative overflow-hidden flex flex-col h-[85vh] max-h-[750px]">
      
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 text-pink-400 hover:text-pink-300 transition-colors text-2xl"
        aria-label="Go back"
      >
        ←
      </button>
      
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
      
      <div className="text-center mb-8 flex-shrink-0">
        <p className="text-[10px] uppercase tracking-[0.4em] text-pink-300 opacity-60 mb-2">A Secret Note 💌</p>
        <h3 className="text-3xl font-romantic text-pink-400">Why I Chose You</h3>
      </div>

      <div className="space-y-8 overflow-y-auto pr-2 scrollbar-hide flex-grow pb-6">
        {reasons.map((r, i) => (
          <div 
            key={i} 
            className="flex items-start gap-4 animate-slide-up" 
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <span className="text-pink-500 text-lg mt-1">✨</span>
            <p className="text-[15px] text-gray-200 leading-relaxed italic whitespace-pre-line font-medium opacity-90">
              {r}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex-shrink-0">
        <button 
          onClick={onComplete}
          className="w-full py-5 bg-white text-rose-600 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-white"
        >
          See Our Memory ❤️
        </button>
      </div>
    </div>
  );
};

export default PersonalReveal;
