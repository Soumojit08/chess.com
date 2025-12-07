import React from 'react';
import { Button } from "@/components/ui/button";

const ContactSec = () => {
  return (
    <section className="w-full py-24 px-8 md:px-24 bg-white text-black border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-end justify-between">
        <div className="w-full md:w-1/2">
            <h2 className="type-h2 text-black mb-8">GET IN TOUCH</h2>
            <p className="type-body text-gray-600 mb-8 max-w-md">
                For inquiries about our exclusive chess sets, custom orders, or general questions, please get in touch.
            </p>
            
            <div className="flex gap-4">
                 <Button variant="outline" className="rounded-none border-black text-black hover:bg-black hover:text-white uppercase tracking-widest text-xs px-8 py-6">
                    Email Us
                 </Button>
            </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-end">
             {/* Abstract Chess Board Graphic or similar */}
             <div className="w-64 h-64 bg-gray-50 grid grid-cols-4 grid-rows-4 opacity-50">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${(Math.floor(i / 4) + i) % 2 === 0 ? 'bg-gray-200' : 'bg-transparent'}`}></div>
                ))}
             </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
