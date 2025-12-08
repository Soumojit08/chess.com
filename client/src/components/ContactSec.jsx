import React from 'react';
import { Button } from "@/components/ui/button";

const ContactSec = () => {
  return (
    <section className="w-full py-24 px-8 md:px-24 bg-white text-black border-t border-gray-100">
      <div className="flex flex-col md:flex-row items-end justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-mono tracking-wider mb-4 text-black">
            GET IN TOUCH
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ContactSec;
