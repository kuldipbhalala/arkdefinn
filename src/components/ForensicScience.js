import React from 'react';

const ForensicScience = () => {
  return (
    
    <div className="min-h-96 bg-gradient-to-b from-sky-100 to-blue-300 py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

          <div className="w-full lg:w-1/2  mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-300 ease-in-out transform hover:scale-102 group">
              <img
                src="forensic science.jpg"
                alt="Forensic Science"
                className="w-full h-[60vh] sm:h-96 lg:h-[28rem] object-cover object-center transition-transform duration-500 ease-in-out transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white break rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-3xl">
              <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-2 tracking-wide">
                  Forensic Science
                </h2>
              </div>

              <div className="p-6 md:p-4 bg-white">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  <span className='text-2xl sm:text-3xl font-semibold text-blue-600'>F</span>orensic science is the application of scientific principles and techniques to solve crimes and enforce laws. It involves the collection, preservation, analysis, and interpretation of physical evidence from crime scenes, which can include anything from fingerprints and DNA to digital data and chemical substances.
                </p>
                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  By bridging the gap between science and law, forensic science plays a crucial role in the criminal justice system, helping to identify suspects, determine causes of death, and uncover critical facts that can lead to convictions or exonerations.
                </p>
              </div>
              <div className="bg-blue-900 text-white py-4 px-6">
                <p className="text-sm font-semibold text-center sm:text-left">
                  Ark Definn Technologies LLP - Forensic Science 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForensicScience;