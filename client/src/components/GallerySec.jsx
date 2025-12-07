import React from 'react';

const GallerySec = () => {
  return (
    <section className="w-full py-24 px-8 md:px-24 bg-white text-black">
      <h2 className="type-h2 text-black mb-12">THE GALLERY</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh]">
        {/* Large Item */}
        <div className="md:col-span-1 md:row-span-2 bg-gray-100 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                IMAGE 1
             </div>
        </div>

        {/* Medium Item */}
        <div className="md:col-span-1 bg-gray-100 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                IMAGE 2
             </div>
        </div>

        {/* Medium Item */}
        <div className="md:col-span-1 bg-gray-100 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                IMAGE 3
             </div>
        </div>
        
         {/* Wide Item */}
         <div className="md:col-span-2 bg-gray-100 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-700">
                VIDEO / IMAGE 4
             </div>
             <div className="absolute bottom-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-black hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
             </div>
        </div>
      </div>
      
      <div className="mt-8 text-right">
          <a href="#" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-gray-600 transition-colors">View All</a>
      </div>
    </section>
  );
};

export default GallerySec;
