
import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface CelebrationProps {
  onNext: () => void;
  onBack: () => void;
}

const Celebration: React.FC<CelebrationProps> = ({ onNext, onBack }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState<string>('');

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch('/portrait.jpeg');
        const blob = await response.blob();
        const reader = new FileReader();
        reader.onload = () => {
          setImageDataUrl(reader.result as string);
        };
        reader.readAsDataURL(blob);
      } catch (error) {
        console.warn('Failed to load image as data URL:', error);
        setImgError(true);
      }
    };
    loadImage();
    const end = Date.now() + (4 * 1000);
    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4d6d', '#c9184a']
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4d6d', '#c9184a']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  return (
    <div className="text-center glass p-10 rounded-[3.5rem] max-w-sm animate-slide-up border-2 border-pink-500/20 shadow-[0_0_60px_rgba(255,77,109,0.3)] film-grain relative overflow-hidden">
      
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 text-pink-400 hover:text-pink-300 transition-colors text-2xl"
        aria-label="Go back"
      >
        ←
      </button>
      
      <div className="relative mb-8 z-10">
        <div className="w-64 h-64 mx-auto rounded-full border-4 border-pink-500/30 overflow-hidden shadow-[0_0_40px_rgba(255,77,109,0.6)] animate-heartbeat bg-black ring-8 ring-pink-500/10 flex items-center justify-center">
          {imgError ? (
            <div className="flex flex-col items-center">
              <div className="text-7xl drop-shadow-[0_0_20px_rgba(255,77,109,0.8)]">💖</div>
            </div>
          ) : (
            <img 
              src={imageDataUrl || '/portrait.jpeg'} 
              alt="Bava & Renamma" 
              className={`w-full h-full object-cover transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="eager"
              onLoad={() => setImgLoaded(true)}
              onError={() => {
                console.warn("Portrait failed in Celebration phase, using love symbol.");
                setImgError(true);
              }}
            />
          )}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl animate-pulse">💖</div>
            </div>
          )}
        </div>
      </div>
      
      <h2 className="text-4xl font-romantic text-pink-400 mb-6 stagger-1 animate-slide-up z-10">
        Finally Caught You!
      </h2>
      
      <div className="space-y-4 text-lg text-gray-200 mb-10 leading-relaxed stagger-2 animate-slide-up z-10">
        <div className="space-y-2">
          <p className="opacity-90 text-xl font-medium">
            Plot twist…
          </p>
          <p className="italic text-pink-300 text-2xl font-romantic">
            Jerry got tired 😄
          </p>
        </div>
        
        <p className="font-black text-white text-5xl py-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Love won
        </p>

        <p className="text-sm text-pink-200/60 pt-4 border-t border-white/5">
          You are Bava's forever now, Renamma. 😌
        </p>
      </div>

      <button 
        onClick={onNext}
        className="w-full py-5 bg-white text-rose-600 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest relative z-10 glow-pink"
      >
        more...
      </button>
    </div>
  );
};

export default Celebration;
