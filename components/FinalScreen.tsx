
import React, { useEffect, useState } from 'react';
import { UserResponseData } from '../types';
import html2canvas from 'html2canvas';

declare const emailjs: any;

interface FinalScreenProps {
  responseData: UserResponseData;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ responseData }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imageDataUrl, setImageDataUrl] = useState<string>('');

  const formattedDate = responseData.selectedDate 
    ? new Date(responseData.selectedDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
    : 'To be decided';

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
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    
    if (typeof emailjs !== 'undefined' && serviceId !== "YOUR_SERVICE_ID") {
      const emailParams: Record<string, string> = {
        to_name: "Bava",
        from_name: "Renamma",
        emotion: String(responseData.emotion || ""),
        one_word: String(responseData.oneWord || ""),
        character: String(responseData.character || ""),
        fav_line: String(responseData.favLine || ""),
        date: String(formattedDate),
        birthday_gift: String(responseData.birthdayGift || ""),
        never_change: Array.isArray(responseData.neverChange) ? responseData.neverChange.join(', ') : "",
        looking_forward: String(responseData.lookingForward || ""),
        boundaries: String(responseData.boundaries || 'No boundaries mentioned.')
      };

      try {
        emailjs.send(serviceId, templateId, emailParams)
          .then(() => console.log('💖 Memory shared!'))
          .catch((err: any) => console.warn('Email check:', String(err)));
      } catch (e) {
        console.error("EmailJS execution failed:", String(e));
      }
    }
  }, [responseData, formattedDate]);

  const shareText = encodeURIComponent(
    `💖 She Said YES! 💖\n\n` +
    `Bava finally caught his Mardhal! ❤️\n` +
    `📅 Date: ${formattedDate}\n` +
    `🎁 Birthday Gift: ${responseData.birthdayGift}\n` +
    `💭 Our Word: ${responseData.oneWord}\n` +
    `✨ Emotion: ${responseData.emotion}\n` +
    `🎭 Character: ${responseData.character}\n` +
    `💬 Favorite Line: ${responseData.favLine}\n` +
    `🔄 Never Change: ${Array.isArray(responseData.neverChange) ? responseData.neverChange.join(', ') : responseData.neverChange}\n` +
    `🚀 Looking Forward: ${responseData.lookingForward}\n` +
    `⚖️ Boundaries: ${responseData.boundaries}\n\n` +
    `Every heart needs a home... and I found mine in you, Renamma.`
  );
  
  const downloadCard = () => {
    if (!imgLoaded || !imageDataUrl) {
      alert("Please wait for the image to load before downloading.");
      return;
    }
    const element = document.getElementById('memory-card');
    if (element) {
      setTimeout(() => {
        html2canvas(element, {
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#000000'
        }).then(canvas => {
          const link = document.createElement('a');
          link.download = 'first chase.png';
          link.href = canvas.toDataURL('image/png');
          link.click();
        });
      }, 200);
    }
  };

  const whatsappUrl = `https://wa.me/?text=${shareText}`;

  return (
    <div className="w-full max-w-md text-center p-6 space-y-8 animate-[zoomIn_0.6s]">
      <div className="relative inline-block group w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 rounded-[2.5rem] blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
        
        <div className="relative glass rounded-[2.5rem] overflow-hidden flex flex-col bg-black/95 border border-white/10 shadow-2xl" id="memory-card">
          <div className="h-[400px] w-full overflow-hidden relative flex items-center justify-center bg-[#1a0505]">
            {imgError ? (
              <div className="flex flex-col items-center justify-center space-y-6 animate-slide-up">
                <div className="text-9xl animate-heartbeat drop-shadow-[0_0_40px_rgba(255,77,109,1)]">❤️</div>
                <div className="space-y-1">
                  <p className="font-romantic text-3xl text-pink-400">Pure Love</p>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Infinite & Forever</p>
                </div>
              </div>
            ) : (
              <img 
                src={imageDataUrl || '/portrait.jpeg'} 
                alt="Bava & Renamma" 
                className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="eager"
                onLoad={() => setImgLoaded(true)}
                onError={() => {
                   console.warn("Hero portrait failed, using love symbol.");
                   setImgError(true);
                }}
              />
            )}
            {!imgLoaded && !imgError && (
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-6xl animate-pulse">💖</div>
               </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.9)]"></div>
          </div>

          <div className="p-8 space-y-4">
            <div className="space-y-2 text-center">
              <h2 className="text-4xl font-romantic text-pink-400 tracking-wide drop-shadow-[0_2px_10px_rgba(255,77,109,0.3)]">
                Bava & Renamma
              </h2>
              <div className="w-12 h-px bg-pink-500/30 mx-auto"></div>
              <p className="text-gray-300 italic text-sm leading-relaxed px-4">
                “Every heart needs a home… <br/>and I found mine in you.”
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/5">
              <div className="border-r border-white/5">
                <p className="text-[8px] text-pink-300/60 uppercase tracking-widest font-bold">Our Date</p>
                <p className="text-sm font-bold text-white">{formattedDate}</p>
              </div>
              <div>
                <p className="text-[8px] text-pink-300/60 uppercase tracking-widest font-bold">Gift for Her</p>
                <p className="text-sm font-bold text-white truncate px-1">{responseData.birthdayGift || "TBD ❤️"}</p>
              </div>
            </div>

            <div className="text-[10px] text-gray-500 space-y-1">
              <p>I promise effort, respect, laughter, and love.</p>
              <p className="italic font-bold text-pink-300/40 uppercase tracking-widest">Forever Yours.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center space-x-3 bg-[#25D366] text-white px-6 py-5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(37,211,102,0.3)] active:scale-95 transition-all"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
            <span>Share ❤️</span>
          </a>
          
          <button 
            onClick={downloadCard}
            className="flex-1 inline-flex items-center justify-center space-x-3 bg-pink-500 text-white px-6 py-5 rounded-2xl font-black text-lg shadow-[0_10px_30px_rgba(255,77,109,0.3)] active:scale-95 transition-all"
          >
            <i className="fas fa-download text-2xl"></i>
            <span>Download</span>
          </button>
        </div>
        
        <p className="text-gray-500 text-[10px] uppercase tracking-widest animate-pulse">
          Keep this memory forever ✨
        </p>
      </div>
    </div>
  );
};

export default FinalScreen;
