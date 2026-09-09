import React from 'react';
import { Compass, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer id="contact" className="bg-[#16382C] text-[#F9F6F0] pt-16 pb-12 border-t border-[#D2A14E]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: About Business */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#0F261E] flex items-center justify-center text-[#D2A14E] border border-[#D2A14E]/30">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-[#F9F6F0] tracking-tight">
                  SIKKIMORA<span className="text-[#D2A14E]"> CAB SERVICE</span>
                </span>
                <p className="text-[10px] uppercase font-semibold text-[#F5E8D0] tracking-widest">
                  Darjeeling & Sikkim Car Rental
                </p>
              </div>
            </div>

            <p className="text-[#F9F6F0]/80 text-sm leading-relaxed">
              Professional, trustworthy car rental and taxi service across Darjeeling, Kalimpong, Gangtok, Nathula Pass, and Bagdogra Airport. Well-maintained cars with certified mountain chauffeurs.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook placeholder"
                className="w-9 h-9 rounded-lg bg-[#0F261E] hover:bg-[#D2A14E] flex items-center justify-center text-[#F5E8D0] hover:text-[#1F2937] transition-colors border border-[#D2A14E]/25"
              >
                <span className="font-bold text-xs">FB</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram placeholder"
                className="w-9 h-9 rounded-lg bg-[#0F261E] hover:bg-[#D2A14E] flex items-center justify-center text-[#F5E8D0] hover:text-[#1F2937] transition-colors border border-[#D2A14E]/25"
              >
                <span className="font-bold text-xs">IG</span>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter X placeholder"
                className="w-9 h-9 rounded-lg bg-[#0F261E] hover:bg-[#D2A14E] flex items-center justify-center text-[#F5E8D0] hover:text-[#1F2937] transition-colors border border-[#D2A14E]/25"
              >
                <span className="font-bold text-xs">X</span>
              </a>
              <a
                href={getWhatsAppChatUrl("Hello, I would like to enquire about taxi booking.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#22A657] hover:bg-[#1B8A48] text-white flex items-center justify-center transition-colors shadow-xs"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-[#D2A14E] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D2A14E]"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm text-[#F9F6F0]/85">
              <li>
                <a href="#hero" className="hover:text-[#D2A14E] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#cars" className="hover:text-[#D2A14E] transition-colors">
                  Our Fleet & Cars
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D2A14E] transition-colors">
                  Taxi & Rental Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#D2A14E] transition-colors">
                  Taxi Fares & Pricing
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-[#D2A14E] transition-colors">
                  Popular Destinations
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#D2A14E] transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#D2A14E] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#D2A14E] transition-colors">
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Mountain Routes */}
          <div>
            <h3 className="text-base font-bold text-[#D2A14E] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D2A14E]"></span>
              Popular Routes
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#F9F6F0]/85">
              <li className="flex items-center justify-between border-b border-[#D2A14E]/20 pb-1.5">
                <span>Bagdogra ➔ Darjeeling</span>
                <span className="text-[#D2A14E] font-bold">From ₹2,400</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#D2A14E]/20 pb-1.5">
                <span>Bagdogra ➔ Gangtok</span>
                <span className="text-[#D2A14E] font-bold">From ₹3,500</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#D2A14E]/20 pb-1.5">
                <span>NJP Station ➔ Darjeeling</span>
                <span className="text-[#D2A14E] font-bold">From ₹2,400</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#D2A14E]/20 pb-1.5">
                <span>Gangtok ➔ Nathula Pass</span>
                <span className="text-[#D2A14E] font-bold">From ₹4,800</span>
              </li>
              <li className="flex items-center justify-between pb-1.5">
                <span>Tiger Hill Sunrise (3-Point)</span>
                <span className="text-[#D2A14E] font-bold">From ₹1,600</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Info */}
          <div>
            <h3 className="text-base font-bold text-[#D2A14E] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D2A14E]"></span>
              Contact Us
            </h3>
            <div className="space-y-3.5 text-sm text-[#F9F6F0]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D2A14E] shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D2A14E] shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#D2A14E] transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D2A14E] shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#D2A14E] transition-colors">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#D2A14E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F9F6F0]">24/7 Cab Dispatch</p>
                  <p className="text-xs text-[#F5E8D0]">Operating all 7 days across Darjeeling & Sikkim</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to top */}
        <div className="pt-8 mt-8 border-t border-[#D2A14E]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F9F6F0]/70">
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved. Dedicated Himalayan taxi & car rental service.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#D2A14E] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
