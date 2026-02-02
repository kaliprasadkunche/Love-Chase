import React, { useState } from 'react';

interface ThePromiseProps {
  onNext: (heartContent: string) => void;
  onBack: () => void;
}

const ThePromise: React.FC<ThePromiseProps> = ({ onNext, onBack }) => {
  const [heartContent, setHeartContent] = useState('');

  return (
    <div className="w-full max-w-md glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl flex flex-col h-[85vh] max-h-[700px] relative">
      
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 text-pink-400 hover:text-pink-300 transition-colors text-2xl"
        aria-label="Go back"
      >
        ←
      </button>
      
      <div className="flex-grow overflow-y-auto space-y-8 pr-2 scrollbar-hide">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-romantic text-pink-400">Tell me what is in your heart 💝</h3>
          <textarea
            value={heartContent}
            onChange={(e) => setHeartContent(e.target.value)}
            placeholder="Share your thoughts, feelings, hopes, dreams... I'm listening ❤️"
            className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-sm focus:outline-none focus:border-pink-500/50 min-h-[200px] resize-none"
          />
        </div>
      </div>

      <button 
        onClick={() => onNext(heartContent)}
        className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-pink mt-6"
      >
        Share Your Heart ❤️
      </button>
    </div>
  );
};

export default ThePromise;