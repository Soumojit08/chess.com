import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 md:px-24 bg-obsidian text-white flex flex-col items-center justify-center border-t border-gray-900">
      <div className="mb-8 text-center">
        <h1 className="type-h1 text-2xl md:text-3xl tracking-[0.3em]">CIRCLE TO SQUARE</h1>
        <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-2">Est. 2024</p>
      </div>
      
      <div className="flex gap-6 mb-8">
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        </a>
      </div>
      
      <div className="text-[10px] text-gray-600 uppercase tracking-widest">
        &copy; 2024 Circle to Square. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
