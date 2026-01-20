
import React from 'react';
import { ShoppingBag, Star, Package, Zap, ShieldCheck } from 'lucide-react';
import { STORE_URL } from '../constants';

const StorePreview: React.FC = () => {
  const storeItems = [
    {
      name: "Tags",
      desc: "Unlock exclusive prefixes, chat colors, and cosmetics to stand out in the hive.",
      icon: Star,
      color: "bg-bee-sky",
      price: "From $5.99"
    },
    {
      name: "Bundles",
      desc: "Get started fast with curated starter kits, eggs, and rare materials.",
      icon: Package,
      color: "bg-bee-yellow",
      price: "From $14.99"
    },
    {
      name: "Gamepasses",
      desc: "Unlock permanent features and utility items to enhance your experience.",
      icon: Zap,
      color: "bg-bee-lime",
      price: "From $4.99"
    }
  ];

  return (
    <section id="store" className="py-24 bg-bee-dark relative border-y-8 border-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-bee-red font-black text-xl mb-4 tracking-tighter uppercase">Support the Server</h2>
          <h3 className="text-6xl font-black mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">OFFICIAL STORE</h3>
          <div className="bg-bee-lime/10 border-2 border-bee-lime text-bee-lime px-6 py-3 inline-flex items-center gap-3 font-black text-sm uppercase tracking-widest pixel-border">
            <ShieldCheck size={20} />
            NO PAY-TO-WIN • NO UNFAIR ADVANTAGES
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {storeItems.map((item, i) => (
            <div key={i} className="bg-[#2a2a2c] border-4 border-black p-8 pixel-border flex flex-col justify-between hover:-translate-y-2 transition-transform shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <div>
                <div className={`${item.color} text-black w-14 h-14 border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-3xl font-black mb-4 uppercase text-white">{item.name}</h4>
                <p className="text-gray-400 font-bold mb-6 leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-bee-yellow font-black text-xl uppercase tracking-tighter">{item.price}</span>
                <div className="w-8 h-8 bg-black/20 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-black border-4 border-black p-10 pixel-border text-center">
          <p className="text-white text-lg font-bold mb-8 italic">
            "Your support helps us keep the servers running and continue development of new features. 
            All purchases are EULA compliant and do not give unfair gameplay advantages over others."
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-bee-yellow text-black px-12 py-6 border-4 border-black minecraft-btn font-black text-2xl uppercase hover:scale-105 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
          >
            <ShoppingBag size={32} />
            Visit the Webstore
          </a>
        </div>
      </div>
    </section>
  );
};

export default StorePreview;
