
import React from 'react';
import { MessageSquare, ShoppingCart, Music } from 'lucide-react';
import { DISCORD_URL, TIKTOK_URL, STORE_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t-8 border-bee-yellow py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-4">
              <img 
                src="https://i.ibb.co/RpBmmz7t/beesim-logo-idea-last-one.png" 
                alt="Bee Sim Logo" 
                className="w-16 h-16 object-contain" 
              />
              <span className="text-3xl font-black tracking-tighter text-bee-sky">BEE SIM</span>
            </a>
            <p className="text-gray-400 font-bold max-w-sm leading-relaxed">
              The premier Minecraft experience for fans of Bee Swarm Simulator. 
              Farm, hatch, and level up in a faithful remake.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-black text-bee-yellow mb-8 uppercase tracking-widest text-sm border-b-2 border-bee-yellow/20 pb-2 inline-block">Navigation</h4>
            <ul className="space-y-4 font-bold">
              <li><a href="#about" className="text-gray-400 hover:text-bee-sky transition-colors uppercase text-sm">Gameplay Features</a></li>
              <li><a href="#join" className="text-gray-400 hover:text-bee-sky transition-colors uppercase text-sm">How to Connect</a></li>
              <li><a href="#vote" className="text-gray-400 hover:text-bee-sky transition-colors uppercase text-sm">Vote Rewards</a></li>
              <li><a href={STORE_URL} className="text-gray-400 hover:text-bee-sky transition-colors uppercase text-sm">Official Store</a></li>
            </ul>
          </div>

          {/* Socials Column */}
          <div>
            <h4 className="font-black text-bee-yellow mb-8 uppercase tracking-widest text-sm border-b-2 border-bee-yellow/20 pb-2 inline-block">Social Media</h4>
            <div className="flex gap-4">
              <a 
                href={DISCORD_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-[#1a1a1b] border-2 border-black flex items-center justify-center text-white hover:bg-bee-sky hover:text-black transition-all minecraft-btn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                title="Discord"
              >
                <MessageSquare size={24} />
              </a>
              <a 
                href={TIKTOK_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-[#1a1a1b] border-2 border-black flex items-center justify-center text-white hover:bg-bee-red hover:text-black transition-all minecraft-btn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                title="TikTok"
              >
                <Music size={24} />
              </a>
              <a 
                href={STORE_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 bg-[#1a1a1b] border-2 border-black flex items-center justify-center text-white hover:bg-bee-lime hover:text-black transition-all minecraft-btn shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                title="Store"
              >
                <ShoppingCart size={24} />
              </a>
            </div>
            <p className="mt-6 text-xs font-black text-gray-500 uppercase tracking-tighter">Join 5,000+ members on Discord</p>
          </div>
        </div>

        {/* Disclaimer Row */}
        <div className="pt-8 border-t border-white/5">
          <div className="max-w-4xl text-[10px] md:text-xs font-bold text-gray-500 leading-relaxed uppercase space-y-2 opacity-60">
            <p>Not an official Minecraft product. Not approved by or associated with Mojang or Microsoft.</p>
            <p>Original concept and inspired by Onett (Bee Swarm Simulator). All server-side mechanics are custom built for this remake.</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-white/5 text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Bee Sim Minecraft. Built with passion for the hive.</p>
          <div className="mt-6 md:mt-0 flex gap-2">
             <div className="w-3 h-3 bg-bee-sky border border-black/20" />
             <div className="w-3 h-3 bg-bee-yellow border border-black/20" />
             <div className="w-3 h-3 bg-bee-lime border border-black/20" />
             <div className="w-3 h-3 bg-bee-red border border-black/20" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
