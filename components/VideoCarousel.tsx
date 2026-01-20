
import React from 'react';
import { YOUTUBE_VIDEOS } from '../constants';

const VideoCarousel: React.FC = () => {
  // Duplicate videos for seamless looping
  const displayVideos = [...YOUTUBE_VIDEOS, ...YOUTUBE_VIDEOS, ...YOUTUBE_VIDEOS];

  return (
    <section className="py-20 bg-black relative overflow-hidden group border-y-8 border-black">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex items-center gap-6 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {displayVideos.map((id, index) => (
          <a
            key={`${id}-${index}`}
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[420px] h-[236px] border-4 border-black overflow-hidden bg-bee-dark hover:scale-105 transition-all duration-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] cursor-pointer group/vid relative block"
          >
            {/* Using high-quality thumbnails instead of iframes to prevent player errors and ensure "open on click" works reliably */}
            <img 
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
              alt="Bee Sim Gameplay" 
              className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-bee-red border-4 border-black flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent ml-2" />
              </div>
            </div>
            
            {/* Label Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
               <span className="text-white font-black text-sm uppercase tracking-tighter">Watch on YouTube</span>
            </div>
          </a>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          /* Sped up from 50s to 25s */
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default VideoCarousel;
