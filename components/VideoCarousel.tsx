
import React from 'react';
import { YOUTUBE_VIDEOS } from '../constants';

const VideoCarousel: React.FC = () => {
  // We need at least 2 sets for a seamless loop, 3 ensures no gaps on ultra-wide screens
  const displayVideos = [...YOUTUBE_VIDEOS, ...YOUTUBE_VIDEOS, ...YOUTUBE_VIDEOS];

  return (
    <section className="py-12 md:py-20 bg-black relative overflow-hidden group border-y-8 border-black">
      {/* Side Fades for depth */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-black via-black/40 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-black via-black/40 to-transparent z-10 pointer-events-none" />

      <div className="flex items-center gap-4 md:gap-8 animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
        {displayVideos.map((id, index) => (
          <a
            key={`${id}-${index}`}
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[280px] h-[157px] md:w-[420px] md:h-[236px] border-4 border-black overflow-hidden bg-bee-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] cursor-pointer group/vid relative block"
          >
            {/* YouTube Thumbnail */}
            <img 
              src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} 
              alt="Bee Sim Gameplay" 
              className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-100 transition-all duration-500"
              loading="lazy"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-bee-red border-4 border-black flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-bee-yellow transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="w-0 h-0 border-t-[10px] md:border-t-[14px] border-t-transparent border-l-[18px] md:border-l-[24px] border-l-white group-hover:border-l-black border-b-[10px] md:border-b-[14px] border-b-transparent ml-1 md:ml-2 transition-colors" />
              </div>
            </div>
            
            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-gradient-to-t from-black via-black/60 to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
               <span className="text-white font-black text-[10px] md:text-xs uppercase tracking-tighter">Community Showcase</span>
               <div className="w-2 h-2 bg-bee-red rounded-full animate-pulse" />
            </div>
          </a>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-marquee {
          /* Ultra-fast speed (8s) for high energy */
          animation: marquee 8s linear infinite;
          will-change: transform;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            /* Even faster on mobile (6s) to ensure consistent visual momentum across small screen */
            animation-duration: 6s;
          }
        }
      `}</style>
    </section>
  );
};

export default VideoCarousel;
