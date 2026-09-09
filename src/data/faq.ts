export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I book a taxi or car rental?',
    answer: 'Booking is simple and fast! Fill in the quick inquiry form on this website or click any WhatsApp button. Your trip details will be pre-formatted into a message on WhatsApp. Our coordinator will reply within minutes with confirmation and driver details.'
  },
  {
    id: 'faq-2',
    question: 'Do you provide permits for Nathula Pass and North Sikkim?',
    answer: 'Yes! We arrange complete government and military permits for restricted border areas including Nathula Pass, Baba Mandir, Gurudongmar Lake, and Yumthang Valley. You simply need to share photos of your valid ID proof (Voter ID or Passport) and passport-size photographs 24 hours prior.'
  },
  {
    id: 'faq-3',
    question: 'Are your drivers experienced on mountain roads?',
    answer: 'Absolutely. All our chauffeurs are local Himalayan residents with a minimum of 8–10 years of commercial hill driving experience across West Bengal and Sikkim roads.'
  },
  {
    id: 'faq-4',
    question: 'What happens if my flight at Bagdogra is delayed?',
    answer: 'We continuously track your flight status using the flight number you share on WhatsApp. Your driver will adjust their arrival time accordingly without any cancellation or delay penalty.'
  },
  {
    id: 'faq-5',
    question: 'Are there any hidden fees or extra driver charges?',
    answer: 'No. All our quotes are transparent and include vehicle hire, fuel, driver allowances, state road taxes, and toll fees for the agreed itinerary.'
  }
];
