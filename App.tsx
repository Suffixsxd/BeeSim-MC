
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoCarousel from './components/VideoCarousel';
import About from './components/About';
import StorePreview from './components/StorePreview';
import Join from './components/Join';
import Vote from './components/Vote';
import Footer from './components/Footer';
import { Home, ExternalLink, Shield, Info } from 'lucide-react';

const App: React.FC = () => {
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') && target.closest('a')?.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.closest('a')?.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-bee-sky selection:text-black relative">
      <Header />
      <main className="flex-grow">
        <Hero />
        <VideoCarousel />
        <About />
        <StorePreview />
        <Join />
        <Vote />
      </main>
      <Footer />

      {/* Floating Action Menu Button (Highly aesthetic Site Hub) */}
      <button 
        onClick={() => setShowQuickMenu(!showQuickMenu)}
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-bee-yellow text-black border-4 border-black pixel-border shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] flex items-center justify-center hover:scale-110 active:scale-90 transition-all group"
        aria-label="Quick Hub"
      >
        <Home size={32} className="group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-bee-red border-2 border-black rounded-full animate-ping" />
      </button>

      {/* Quick Hub Popup (The "Cleaner" Menu) */}
      {showQuickMenu && (
        <>
          <div 
            className="fixed inset-0 z-[85] bg-black/40 backdrop-blur-sm"
            onClick={() => setShowQuickMenu(false)}
          />
          <div className="fixed bottom-28 right-8 z-[90] w-64 bg-bee-dark border-4 border-black pixel-border shadow-[12px_12px_0px_0px_rgba(0,0,0,0.6)] overflow-hidden">
            <div className="bg-bee-yellow p-4 border-b-4 border-black flex justify-between items-center">
              <span className="text-black font-black uppercase text-sm">Site Hub</span>
              <Shield size={16} className="text-black" />
            </div>
            <div className="p-2 space-y-1">
              {[
                { label: 'Back to Top', icon: Home, action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                { label: 'Server Status', icon: Shield, action: () => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' }) },
                { label: 'Official Store', icon: ExternalLink, action: () => window.open('https://beesim.tebex.io/', '_blank') },
                { label: 'Wiki (Coming Soon)', icon: Info, action: () => alert('Wiki is currently under development!') },
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => { item.action(); setShowQuickMenu(false); }}
                  className="w-full flex items-center gap-4 p-4 text-white hover:bg-bee-sky hover:text-black transition-colors font-bold uppercase text-xs text-left"
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
            </div>
            <div className="bg-black/20 p-2 text-center">
              <span className="text-[10px] text-gray-500 font-black uppercase">Bee Sim v1.0.4</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
