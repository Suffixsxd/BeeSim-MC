
import React, { useState } from 'react';
import { Copy, Check, ShieldCheck, Gamepad2, Info } from 'lucide-react';
import { SERVER_IP, GAME_VERSIONS } from '../constants';

const Join: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="join" className="py-24 bg-bee-dark relative overflow-hidden border-y-8 border-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-black mb-4 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">HOW TO JOIN</h2>
            <p className="text-xl text-bee-sky font-bold uppercase tracking-widest">Connect and start farming</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 bg-[#333333] border-4 border-black p-8 pixel-border relative overflow-hidden">
               <div className="flex items-center gap-3 mb-6 text-bee-lime">
                 <ShieldCheck size={28} />
                 <h4 className="text-2xl font-black uppercase">Requirements</h4>
               </div>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                   <div className="w-6 h-6 bg-bee-lime border-2 border-black flex-shrink-0" />
                   <p className="text-white font-bold"><span className="text-bee-lime">Premium</span> Minecraft Java Edition account is required.</p>
                 </li>
                 <li className="flex gap-4">
                   <div className="w-6 h-6 bg-bee-sky border-2 border-black flex-shrink-0" />
                   <p className="text-white font-bold">Compatible with <span className="text-bee-sky">1.21.x</span> versions.</p>
                 </li>
               </ul>
               <div className="mt-8 bg-black/40 p-4 border-2 border-black italic text-sm text-gray-400 font-medium">
                 Note: Bedrock/Pocket edition is not currently supported.
               </div>
            </div>

            <div className="lg:col-span-7 bg-[#444444] border-4 border-black p-8 pixel-border flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Gamepad2 size={32} className="text-bee-yellow" />
                  <h4 className="text-3xl font-black uppercase text-white">Direct Connect</h4>
                </div>
                
                <div 
                  onClick={copyIp}
                  className="bg-black border-4 border-[#222222] p-8 rounded-sm flex items-center justify-between cursor-pointer hover:border-bee-yellow transition-all group mb-8 relative"
                >
                  <div>
                    <span className="block text-xs font-black text-bee-yellow uppercase mb-2">Server Address</span>
                    <span className="text-3xl md:text-4xl font-black text-white tracking-tighter">{SERVER_IP}</span>
                  </div>
                  <div className={`p-5 border-2 border-black minecraft-btn transition-all ${copied ? 'bg-bee-lime' : 'bg-[#555] group-hover:bg-[#666]'}`}>
                    {copied ? <Check size={28} className="text-black" /> : <Copy size={28} className="text-white" />}
                  </div>
                  {copied && (
                    <div className="absolute -top-4 right-0 bg-bee-lime text-black px-4 py-1 font-black text-xs border-2 border-black animate-bounce">
                      COPIED!
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-gray-400 font-black uppercase text-sm mr-2">Versions:</span>
                {GAME_VERSIONS.map(v => (
                  <span key={v} className="bg-black text-bee-sky px-4 py-2 border-2 border-black font-black text-sm">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 bg-bee-yellow border-4 border-black p-4 flex items-center justify-center gap-3 pixel-border">
            <Info size={20} className="text-black" />
            <p className="text-black font-black uppercase text-sm">Server capacity: 500+ Players! No lag, high performance hardware.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
