
import React from 'react';
import { Target, Zap, TrendingUp, Sparkles, History, ExternalLink, Play } from 'lucide-react';

const About: React.FC = () => {
  const videoId = "bs_9S1EeUiQ";
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const features = [
    {
      title: "Bees & Progression",
      description: "Unlock various bee types, from Basic to Mythic. Each bee has custom abilities and buffs for your hive.",
      icon: Zap,
      color: "text-black",
      bg: "bg-bee-sky"
    },
    {
      title: "Honey Farming",
      description: "Farm vast flower fields. Collect pollen with tools and return to your hive to refine it into honey.",
      icon: TrendingUp,
      color: "text-black",
      bg: "bg-bee-yellow"
    },
    {
      title: "Quests & Rewards",
      description: "Complete quests from NPCs like Black Bear and Mother Bear to earn items and permanent upgrades.",
      icon: Target,
      color: "text-black",
      bg: "bg-bee-lime"
    },
    {
      title: "Epic Equipment",
      description: "Spend your honey on better collectors, bags, and boots to become the ultimate honey master.",
      icon: Sparkles,
      color: "text-white",
      bg: "bg-bee-red"
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#252526]">
      <div className="container mx-auto px-6">
        {/* Story Section */}
        <div className="mb-24 bg-black border-4 border-black p-8 md:p-12 pixel-border shadow-[12px_12px_0px_0px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="bg-bee-yellow text-black p-6 border-4 border-black pixel-border w-24 h-24 flex items-center justify-center flex-shrink-0 -rotate-3">
              <History size={48} />
            </div>
            <div>
              <h2 className="text-bee-yellow font-black text-3xl mb-4 tracking-tighter uppercase">Our Journey</h2>
              <p className="text-white text-xl font-bold leading-relaxed italic">
                "Bee Sim officially released on <span className="text-bee-sky">July 1st, 2025</span> after a long and stressful <span className="text-bee-red">18 months</span> of development. Every block, every bee, and every flower was built with passion to bring the ultimate simulator experience to Minecraft."
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-bee-yellow font-black text-xl mb-4 tracking-tighter uppercase">GAMEPLAY MECHANICS</h2>
          <h3 className="text-5xl md:text-6xl font-black mb-6 leading-none">
            REBUILT FROM THE <span className="text-bee-sky underline decoration-black underline-offset-8">BLOCKS</span> UP
          </h3>
          <p className="text-gray-300 text-lg font-bold">
            Experience the full Bee Swarm Simulator loop: Explore fields, hatch eggs, complete quests, and grind honey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="bg-bee-dark border-4 border-black p-8 group hover:-translate-y-2 transition-all duration-300 pixel-border"
            >
              <div className={`${f.bg} ${f.color} w-16 h-16 border-2 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                <f.icon size={32} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase text-bee-sky tracking-tight">{f.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* 
              Direct Click-to-YouTube Container
              This avoids all Player API errors and works perfectly on all browsers.
          */}
          <a 
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-8 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] relative group overflow-hidden bg-black aspect-video flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
          >
            {/* The Visual Thumbnail */}
            <div className="absolute inset-0 z-0">
              <img 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                alt="Bee Sim Gameplay Preview"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-[0.4] group-hover:brightness-50"
              />
              {/* Custom Overlay for 'Better' fitting appropriate look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>
              <div className="absolute inset-0 border-[20px] border-black/10 pointer-events-none"></div>
            </div>
            
            {/* The Play Button HUD */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-bee-yellow text-black border-4 border-black flex items-center justify-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative">
                {/* Animated Pulse Ring */}
                <div className="absolute inset-0 border-4 border-bee-yellow animate-ping opacity-30"></div>
                <Play size={48} fill="black" />
              </div>
              <div className="bg-black/80 backdrop-blur-md px-6 py-3 border-2 border-bee-yellow pixel-border">
                <span className="text-bee-yellow font-black uppercase text-lg tracking-widest flex items-center gap-3">
                  Watch Gameplay <ExternalLink size={20} />
                </span>
              </div>
            </div>
            
            {/* Top Badge: GAMEPLAY FOOTAGE */}
            <div className="absolute top-6 left-6 bg-bee-red text-white border-2 border-black px-5 py-2 font-black italic text-base z-20 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              GAMEPLAY FOOTAGE
            </div>

            {/* Bottom Credit */}
            <div className="absolute bottom-4 left-6 z-20 text-white/40 font-black text-[10px] uppercase tracking-[0.2em] pointer-events-none">
              Official Server Showcase • 1080p 60fps
            </div>
          </a>
          
          <div className="space-y-8">
             <div className="flex gap-6 items-start">
               <div className="bg-bee-sky text-black w-14 h-14 border-4 border-black flex-shrink-0 flex items-center justify-center font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 1
               </div>
               <div>
                 <h5 className="font-black text-2xl mb-2 text-white uppercase tracking-tight">Premium Only Access</h5>
                 <p className="text-gray-400 font-bold">We maintain a high-quality community. Only premium Minecraft accounts are allowed on the server to ensure stability and safety.</p>
               </div>
             </div>
             <div className="flex gap-6 items-start">
               <div className="bg-bee-yellow text-black w-14 h-14 border-4 border-black flex-shrink-0 flex items-center justify-center font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                 2
               </div>
               <div>
                 <h5 className="font-black text-2xl mb-2 text-white uppercase tracking-tight">Weekly Patches</h5>
                 <p className="text-gray-400 font-bold">New bees, fields, and equipment are added every single week. Our developers are dedicated fans of the original game.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
