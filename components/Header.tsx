
import React, { useState, useEffect } from 'react';
import { MessageSquare, LayoutGrid, ShoppingBag, Vote as VoteIcon, Play, Menu, X } from 'lucide-react';
import { DISCORD_URL, STORE_URL } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'About', href: '#about', icon: LayoutGrid },
    { label: 'Store', href: '#store', icon: ShoppingBag },
    { label: 'Join', href: '#join', icon: Play },
    { label: 'Vote', href: '#vote', icon: VoteIcon },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled || isMobileMenuOpen ? 'bg-bee-dark/95 border-b-4 border-bee-yellow py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group z-50">
          <img 
            src="https://i.ibb.co/RpBmmz7t/beesim-logo-idea-last-one.png" 
            alt="Bee Sim Logo" 
            className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-full border-2 border-black group-hover:scale-110 transition-transform" 
          />
          <span className="text-xl md:text-2xl font-black tracking-tighter text-bee-sky">BEE SIM</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-bee-yellow font-bold flex items-center gap-2 transition-colors text-sm uppercase tracking-widest"
            >
              <item.icon size={16} />
              {item.label}
            </a>
          ))}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bee-sky text-black px-6 py-2 border-2 border-black minecraft-btn font-black flex items-center gap-2 transition-all hover:brightness-110 active:scale-95"
          >
            <MessageSquare size={18} />
            <span className="uppercase">Discord</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-50 p-2 text-white bg-bee-dark border-2 border-black pixel-border hover:bg-bee-yellow hover:text-black transition-colors"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/90 backdrop-blur-xl transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}>
          <div className="flex flex-col h-full pt-32 pb-12 px-8">
            <div className="space-y-4">
              {navItems.map((item, idx) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between p-6 bg-[#2a2a2c] border-4 border-black pixel-border text-white hover:bg-bee-yellow hover:text-black transition-all group shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <item.icon size={24} className="text-bee-sky group-hover:text-black" />
                    <span className="text-2xl font-black uppercase tracking-tighter">{item.label}</span>
                  </div>
                  <Play size={20} className="text-bee-yellow group-hover:text-black" />
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-bee-sky text-black p-6 border-4 border-black minecraft-btn font-black text-xl uppercase w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]"
              >
                <MessageSquare size={24} />
                Join Discord
              </a>
              <div className="flex gap-4">
                <div className="flex-1 h-2 bg-bee-red border border-black" />
                <div className="flex-1 h-2 bg-bee-yellow border border-black" />
                <div className="flex-1 h-2 bg-bee-sky border border-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
