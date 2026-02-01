
import React, { useState } from 'react';

interface BirthdayGiftProps {
  onNext: (gift: string) => void;
}

const BirthdayGift: React.FC<BirthdayGiftProps> = ({ onNext }) => {
  const [gift, setGift] = useState('');

  return (
    <div className="w-full max-w-sm glass p-8 rounded-[2rem] animate-slide-up border border-white/10 shadow-2xl flex flex-col gap-6">
      <div className="text-center">
        <p className="text-[10px] uppercase tracking-widest text-pink-300/60 mb-2">Wait, one more thing... 🎁</p>
        <h3 className="text-2xl font-romantic text-pink-400 leading-tight">What gift do you want on your birthday?</h3>
      </div>

      <div className="space-y-4">
        <label className="block text-center text-gray-300 text-sm italic">
          “This bava is taking notes... tell me anything you've been wishing for! ✨”
        </label>
        <textarea
          value={gift}
          onChange={(e) => setGift(e.target.value)}
          placeholder="A dress? A dinner? Something special? Or just bava? 😉"
          className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-center focus:outline-none focus:border-pink-500/50 transition-all text-white placeholder-white/20 min-h-[120px] resize-none"
        />
      </div>

      <button 
        onClick={() => onNext(gift || "Just you, Bava ❤️")}
        className="w-full py-5 bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl font-black text-xl shadow-xl active:scale-95 transition-all glow-pink"
      >
        Save to Heart ❤️
      </button>
    </div>
  );
};

export default BirthdayGift;
