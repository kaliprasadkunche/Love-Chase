
import React, { useEffect, useState } from 'react';
import { UserResponseData } from '../types';
import domtoimage from 'dom-to-image';

interface FinalScreenProps {
  responseData: UserResponseData;
  onBack: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ responseData, onBack }) => {
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
    
    // Web3Forms configuration
    const accessKey = "e143b952-17d4-4ad8-82d0-0c5b117be300";
    
    if (accessKey) {
      const htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Love Chase Response</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 20px;
                }
                .container {
                    background: white;
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
                    margin: 20px 0;
                }
                .header {
                    text-align: center;
                    background: linear-gradient(135deg, #ff6b6b, #ee5a24);
                    color: white;
                    padding: 30px;
                    border-radius: 15px;
                    margin-bottom: 30px;
                }
                .header h1 {
                    margin: 0;
                    font-size: 28px;
                    font-weight: 700;
                }
                .header p {
                    margin: 10px 0 0 0;
                    opacity: 0.9;
                    font-size: 16px;
                }
                .response-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 20px;
                    margin: 30px 0;
                }
                .response-card {
                    background: #f8f9ff;
                    border: 2px solid #e0e7ff;
                    border-radius: 15px;
                    padding: 20px;
                    transition: transform 0.3s ease;
                }
                .response-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }
                .response-card h3 {
                    color: #6366f1;
                    margin: 0 0 10px 0;
                    font-size: 16px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .response-card .value {
                    color: #1f2937;
                    font-size: 18px;
                    font-weight: 500;
                    margin: 0;
                    word-wrap: break-word;
                }
                .heart-content {
                    background: linear-gradient(135deg, #fef3c7, #fde68a);
                    border: 2px solid #f59e0b;
                    border-radius: 15px;
                    padding: 25px;
                    margin: 30px 0;
                    position: relative;
                }
                .heart-content h3 {
                    color: #92400e;
                    margin: 0 0 15px 0;
                    font-size: 20px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .heart-content .value {
                    color: #78350f;
                    font-style: italic;
                    line-height: 1.7;
                    white-space: pre-line;
                    margin: 0;
                    font-size: 16px;
                }
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 2px solid #e5e7eb;
                    color: #6b7280;
                }
                .footer p {
                    margin: 5px 0;
                    font-size: 14px;
                }
                .emoji {
                    font-size: 24px;
                }
                .small-emoji {
                    font-size: 18px;
                }
                @media (max-width: 600px) {
                    body {
                        padding: 10px;
                    }
                    .container {
                        padding: 20px;
                    }
                    .response-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>💖 Love Chase Response 💖</h1>
                    <p>A beautiful journey captured in digital hearts</p>
                </div>

                <div class="response-grid">
                    <div class="response-card">
                        <h3>😊 Emotion</h3>
                        <p class="value">${responseData.emotion || 'Not specified'}</p>
                    </div>
                    
                    <div class="response-card">
                        <h3>💭 One Word</h3>
                        <p class="value">${responseData.oneWord || 'Not specified'}</p>
                    </div>
                    
                    <div class="response-card">
                        <h3>🎭 Character/Persona</h3>
                        <p class="value">${responseData.character || 'Not specified'}</p>
                    </div>
                    
                    <div class="response-card">
                        <h3>💬 Favorite Line</h3>
                        <p class="value">${responseData.favLine || 'Not specified'}</p>
                    </div>
                    
                    <div class="response-card">
                        <h3>📅 Selected Date</h3>
                        <p class="value">${formattedDate}</p>
                    </div>
                    
                    <div class="response-card">
                        <h3>🎁 Birthday Gift</h3>
                        <p class="value">${responseData.birthdayGift || 'Not specified'}</p>
                    </div>
                </div>

                <div class="heart-content">
                    <h3>💝 From the Heart</h3>
                    <p class="value">${responseData.heartContent || 'No message shared'}</p>
                </div>

                <div class="footer">
                    <p><strong>Love Chase App</strong> | Capturing moments of love</p>
                    <p>Generated on ${new Date().toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}</p>
                    <p>✨ Made with love for Bava & Renamma ✨</p>
                </div>
            </div>
        </body>
        </html>
      `;

      const formData = {
        access_key: accessKey,
        subject: "💖 New Love Chase Response - Beautiful Journey Captured! 💖",
        from_name: "Love Chase App",
        to_email: "kaliprasadkunche@gmail.com",
        html: htmlContent
      };

      try {
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('💖 Love Chase response sent successfully!');
          } else {
            console.warn('Web3Forms submission failed:', data.message);
          }
        })
        .catch((err: any) => {
          console.warn('Web3Forms error:', String(err));
        });
      } catch (e) {
        console.error("Web3Forms execution failed:", String(e));
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
    `� Heart Content: ${responseData.heartContent}\n\n` +
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
        domtoimage.toPng(element)
          .then(dataUrl => {
            const link = document.createElement('a');
            link.download = 'first chase.png';
            link.href = dataUrl;
            link.click();
          })
          .catch(error => {
            console.error('Error generating image:', error);
            alert('Failed to download the card. Please try again.');
          });
      }, 200);
    }
  };

  const whatsappUrl = `https://wa.me/?text=${shareText}`;

  return (
    <div className="w-full max-w-md text-center p-6 space-y-8 animate-[zoomIn_0.6s] relative">
      
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-20 text-pink-400 hover:text-pink-300 transition-colors text-2xl"
        aria-label="Go back"
      >
        ←
      </button>
      
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
