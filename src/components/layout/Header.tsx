import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mountain, Compass, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Cars', href: '#cars' },
    { name: 'Services', href: '#services' },
    { name: 'Taxi Fares', href: '#pricing' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Packages', href: '#packages' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section based on scroll position
      const scrollPosition = window.scrollY + 140;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const targetId = navLinks[i].href.substring(1);
        const section = document.getElementById(targetId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].href);
            return;
          }
        }
      }
      setActiveSection('#hero');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href);
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#16382C] text-[#F9F6F0] text-xs py-1.5 px-4 hidden md:block border-b border-[#D2A14E]/20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center box-border">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#F5E8D0] font-medium">
              <Mountain className="w-3.5 h-3.5 text-[#D2A14E] shrink-0" />
              <span>Trusted Mountain Taxi &amp; Car Rental in Darjeeling &amp; Sikkim</span>
            </span>
            <span className="hidden xl:flex items-center gap-1.5 text-[#F9F6F0]/85">
              <ShieldCheck className="w-3.5 h-3.5 text-[#22A657] shrink-0" />
              <span>Permit Assistance for Nathula Pass &amp; North Sikkim</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 text-[#F9F6F0]/90 hover:text-[#D2A14E] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D2A14E] shrink-0" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-white/30">|</span>
            <span className="text-[#F9F6F0]/80">Mon – Sun (24/7 Cab Dispatch)</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`w-full sticky top-0 z-40 transition-all duration-200 border-b border-[#E3DAC9] box-border ${
          isScrolled
            ? 'bg-[#F9F6F0]/95 backdrop-blur-md shadow-xs py-2.5'
            : 'bg-[#F9F6F0] py-3'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-4 box-border">
          {/* LEFT: SIKKIMORA CAB SERVICE Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Sikkimora Cab Service"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#16382C] to-[#0F261E] flex items-center justify-center text-[#D2A14E] shadow-xs group-hover:scale-105 transition-all duration-200 shrink-0">
              <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="text-[15px] sm:text-base font-black text-[#1F2937] tracking-tight leading-none group-hover:text-[#22A657] transition-colors">
                SIKKIMORA
              </div>
              <div className="text-[10px] sm:text-[10.5px] font-bold text-[#D2A14E] tracking-wider uppercase leading-none mt-1">
                CAB SERVICE
              </div>
              <div className="text-[8px] sm:text-[8.5px] font-medium text-[#4B5563] tracking-wider uppercase leading-none mt-0.5 hidden sm:block">
                DARJEELING &amp; SIKKIM CAR RENTAL
              </div>
            </div>
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-2 xl:px-2.5 py-1.5 rounded-md text-[12.5px] xl:text-[13px] font-medium whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#F5E8D0] text-[#1F2937] font-bold shadow-2xs'
                      : 'text-[#1F2937] hover:text-[#22A657] hover:bg-[#F1ECE1]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: Phone/Contact Area & WhatsApp CTA Button */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0">
            {/* Subtle Divider */}
            <div className="h-5 w-px bg-[#E3DAC9]" />

            {/* Phone Contact Info */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 text-left group py-1 px-1 rounded-lg hover:bg-[#F1ECE1] transition-colors"
              title="Call us for booking"
            >
              <div className="w-7 h-7 rounded-full bg-[#F5E8D0] flex items-center justify-center text-[#1F2937] group-hover:bg-[#16382C] group-hover:text-[#F5E8D0] transition-colors duration-150 shrink-0">
                <Phone className="w-3 h-3 text-[#D2A14E]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-medium text-[#4B5563] uppercase tracking-wider leading-none">
                  Call us for booking
                </span>
                <span className="text-[11.5px] xl:text-xs font-bold text-[#1F2937] group-hover:text-[#22A657] leading-tight mt-0.5 whitespace-nowrap">
                  {siteConfig.phoneDisplay}
                </span>
              </div>
            </a>

            {/* Prominent Emerald Green WhatsApp CTA Button */}
            <a
              href={getWhatsAppChatUrl("Hello, I would like to book a taxi/car rental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-3.5 xl:px-4 py-2 rounded-xl font-bold text-xs xl:text-[13px] shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0 group/cta"
            >
              <WhatsAppIcon className="w-[19px] h-[19px] text-white group-hover/cta:scale-105 transition-transform duration-200" />
              <span>Book on WhatsApp</span>
            </a>
          </div>

          {/* MOBILE / TABLET Menu Button & WhatsApp Quick Action */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppChatUrl("Hello, I would like to book a taxi/car rental.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] px-3 py-1.5 rounded-lg font-bold text-xs shadow-xs transition-all duration-200 active:scale-95"
              aria-label="Book on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1F2937] hover:bg-[#F5E8D0] focus:outline-none focus:ring-2 focus:ring-[#D2A14E]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F9F6F0] border-b border-[#E3DAC9] px-4 pt-3 pb-6 shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#F5E8D0] text-[#1F2937] font-bold'
                        : 'text-[#1F2937] hover:bg-[#F1ECE1] hover:text-[#22A657]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-[#E3DAC9] space-y-2.5">
              <a
                href={getWhatsAppChatUrl("Hello, I would like to enquire about taxi / car rental.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#22A657] hover:bg-[#1B8A48] text-white border border-[#1B8A48] py-3 rounded-xl font-bold text-sm shadow-sm transition-all duration-200 active:scale-98"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="w-full flex items-center justify-center gap-2 bg-[#F1ECE1] text-[#1F2937] border border-[#E3DAC9] py-2.5 rounded-xl font-semibold text-sm"
              >
                <Phone className="w-4 h-4 text-[#D2A14E]" />
                <span>Call us for booking: {siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

