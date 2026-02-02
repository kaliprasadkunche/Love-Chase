import React from 'react';

interface LoveLetterProps {
  onNext: () => void;
  onBack: () => void;
}

const LoveLetter: React.FC<LoveLetterProps> = ({ onNext, onBack }) => {
  return (
    <div className="text-center glass p-10 rounded-[3.5rem] max-w-lg animate-slide-up border-2 border-pink-500/20 shadow-[0_0_60px_rgba(255,77,109,0.3)] film-grain relative overflow-hidden h-[80vh] flex flex-col">

      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 text-pink-400 hover:text-pink-300 transition-colors text-2xl"
        aria-label="Go back"
      >
        ←
      </button>

      <div className="relative mb-8 z-10 flex-shrink-0">
        <div className="text-6xl drop-shadow-[0_0_20px_rgba(255,77,109,0.8)] animate-pulse">
          💌
        </div>
      </div>

      <h2 className="text-4xl font-romantic text-pink-400 mb-6 stagger-1 animate-slide-up z-10 flex-shrink-0">
        A Love Letter to My Renamma
      </h2>

      <div className="flex-1 overflow-y-auto mb-6">
        <div className="space-y-4 text-lg font-romantic italic text-white leading-relaxed stagger-2 animate-slide-up z-10 text-left pr-2">
          <p className="text-center italic text-pink-300 text-xl font-romantic mb-6">
            Naa bujji Renullu…
          </p>

          <p>
            Ela modhalu pettalo kuda theliyatledhu 🤍<br />
            Roju rojiki nee meedha prema ala perigipothundhi 💫,<br />
            silent gaa… slow gaa… but deeply 🌙<br />
            Appudu appudu naake anipisthundhi —<br />
            "Idhi nenenaa? Ila maarimdhi ani?" 🌸
          </p>

          <p>
            Last two and a half years lo,<br />
            nenu evarithonu close gaa connect kaaledhu.<br />
            Intlo vallatho thappa,<br />
            not even once I tried,<br />
            not even once I felt the need.<br />
            Kaani nee daggariki vachesariki,<br />
            ala undaleka poya 💭<br />
            Something changed. Nenu kuda ardham cheskolekapoya 🤍
          </p>

          <p>
            Maybe nuvvu naa life lo vachina aa change anukunta 💖<br />
            And I truly believe in that ✨<br />
            Endhuko thelidhu,<br />
            it feels like God and the universe have been quietly planning this moment for us 🌌, as if everything has been falling into place just to bring us closer 🤍
          </p>

          <p>
            Neeku anipinchavachu, sudden gaa idhi antha ela jarigindhi ani.<br />
            Believe me, naaku kuda theyliyadhu 🙂<br />
            Love ela untundhi antey.<br />
            Sometimes it takes years ⏳, and sometimes it happens in just a moment 💞<br />
            Nee vishayam lo…<br />
            naku konchem fast gaa ayinattu anipisthundhi 🌸
          </p>

          <p>
            I know idhi neeku easy kaadhu.<br />
            Sudden emotions ni handle cheyadam chala kastam ani naku theylusu 🤍<br />
            But naa side nundi matram,<br />
            oka chinna korika undhi —<br />
            nee meedha naa love, care, time choopinchali ani 💕<br />
            Simple gaa… honest gaa…<br />
            without expectations, without pressure 🌿
          </p>

          <p>
            Kaani relationships okka side nundi work avvavu kada.<br />
            Rendu vaipula nundi undali 🤝<br />
            Andhuke nenu wait chesthunna.<br />
            Listening.... Understanding.... 🌼
          </p>

          <p>
            Maybe idhantha scripted laa anipinchavachu,<br />
            because things happened so like that.<br />
            Kaani naa heart nundi chepthunna —<br />
            naa love scripted aythe kaadhu 💓<br />
            it very true in my heart 🤍<br />
            Just… adhi ela express cheyalo naku ardhamkavatam ledhu.<br />
            konni sarlu cheyakudavi kuda cheysthuna<br />
            but not in wrong intension , with only love 🤍
          </p>

          <p>
            Nee mind lo em undho,<br />
            nee heart em chepthundho —<br />
            naku inka thelidhu 💭<br />
            Interested aa kaadha ani kuda theliyadhu.<br />
            And that's okay 🌸
          </p>

          <p>
            At the end of the day,<br />
            decision nee chethilo undhi —<br />
            yes or no ✨<br />
            Renditini nenu respect chestha 🤍
          </p>

          <p>
            Kaani nuvvu okavela yes cheppithe… 💖<br />
            aa roju nundi nuvve naa prapancham gaa brathikestha 🌍<br />
            Nee happiness, nee peace, nee smile —<br />
            avi naa responsibility gaa chooskuntanu 😊
          </p>

          <p>
            But if no, chepu kurcho petti edhigo naku ela anipisthundhi ani, i can understand we are not kids anymore 🤍
          </p>

          <p className="text-center font-romantic text-pink-300 text-xl mt-6">
            Hoping for Good 🌷<br />
            Your Bava 💕
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full py-5 bg-white text-rose-600 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl uppercase tracking-widest relative z-10 glow-pink flex-shrink-0"
      >
        Continue Our Journey ✨
      </button>
    </div>
  );
};

export default LoveLetter;