
import React from 'react';
import { Trophy, ArrowUpRight } from 'lucide-react';
import { VOTE_LINKS } from '../constants';

const Vote: React.FC = () => {
  return (
    <section id="vote" className="py-24 relative bg-[url('https://www.transparenttextures.com/patterns/pollen.png')]">
      <div className="container mx-auto px-6">
        <div className="bg-bee-dark border-8 border-black p-12 md:p-16 relative overflow-hidden shadow-[16px_16px_0px_0px_rgba(0,0,0,0.4)]">
          <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-3 bg-bee-yellow text-black border-2 border-black px-6 py-2 font-black text-sm uppercase mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Trophy size={20} />
                Daily Rewards
              </div>
              <h2 className="text-6xl md:text-7xl font-black mb-8 leading-[0.9] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                VOTE FOR <br/><span className="text-bee-yellow">BEE SIM</span>
              </h2>
              <p className="text-xl text-white font-bold leading-relaxed mb-8">
                Help us reach the top of the server lists! Every vote may grant you <span className="text-bee-lime">special rewards</span> in-game to kickstart your journey.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-4 bg-bee-sky border-2 border-black" />
                <div className="h-4 bg-bee-yellow border-2 border-black" />
                <div className="h-4 bg-bee-red border-2 border-black" />
              </div>
            </div>

            <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full">
              {VOTE_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#2a2a2c] border-4 border-black p-6 md:p-8 transition-all flex flex-col justify-between min-h-[10rem] md:min-h-[12rem] h-auto hover:-translate-y-2 hover:bg-bee-yellow group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-500 font-black uppercase text-xs group-hover:text-black">SERVER LIST</span>
                    <ArrowUpRight className="text-bee-sky group-hover:text-black transition-colors flex-shrink-0" size={28} />
                  </div>
                  <span className="text-xl md:text-2xl font-black text-white group-hover:text-black transition-colors uppercase leading-tight break-words">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vote;
