
import React from 'react';
import { MessageSquare, MousePointer2, ChevronRight } from 'lucide-react';
import { DISCORD_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/pollen.png')]">
      {/* Visual Accents */}
      <div className="absolute top-20 right-[10%] w-32 h-32 bg-bee-yellow opacity-20 border-4 border-black rotate-12 -z-10" />
      <div className="absolute bottom-40 left-[5%] w-24 h-24 bg-bee-lime opacity-20 border-4 border-black -rotate-12 -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <div className="inline-block bg-bee-lime text-black border-2 border-black px-6 py-2 font-black text-sm mb-6 pixel-border uppercase tracking-tighter">
            Bee Swarm Simulator in Minecraft
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
            <span className="text-bee-sky">BEE</span><br className="md:hidden" />
            <span className="text-bee-yellow"> SIM</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto font-bold leading-relaxed">
            The ultimate <span className="text-bee-lime">remake</span> of Roblox’s Bee Swarm Simulator. Collect unique bees, farm honey fields, and upgrade your gear in Java 1.21+.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8 w-full sm:w-auto">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-bee-red text-white px-10 py-5 border-4 border-black minecraft-btn font-black text-2xl flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95 uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
            >
              <MessageSquare size={32} />
              Join Discord
            </a>
            
            <a
              href="#join"
              className="w-full sm:w-auto bg-white text-black px-10 py-5 border-4 border-black minecraft-btn font-black text-2xl flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]"
            >
              <MousePointer2 size={28} />
              How to Join
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6">
            <div className="bg-bee-dark border-2 border-black p-4 flex items-center gap-3 pixel-border">
              <div className="w-4 h-4 bg-bee-lime rounded-sm animate-pulse" />
              <span className="font-bold text-bee-lime uppercase tracking-widest text-xs">24/7 ONLINE</span>
            </div>
            <div className="bg-bee-dark border-2 border-black p-4 flex items-center gap-3 pixel-border">
              <div className="w-4 h-4 bg-bee-sky rounded-sm" />
              <span className="font-bold text-bee-sky uppercase tracking-widest text-xs">100+ CUSTOM BEES</span>
            </div>
            <div className="bg-bee-dark border-2 border-black p-4 flex items-center gap-3 pixel-border">
              <div className="w-4 h-4 bg-bee-yellow rounded-sm" />
              <span className="font-bold text-bee-yellow uppercase tracking-widest text-xs">HONEY ECONOMY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
