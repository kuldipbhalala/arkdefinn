import React from 'react';

const ForensicScience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="forensic science.jpg" 
              alt="Forensic Science" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-sky-600 to-blue-700 p-6">
                <h2 className="text-4xl font-bold text-center text-white mb-2">
                  Forensic Science
                </h2>
              </div>
              <div className="p-6 md:p-8 bg-white">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Forensic science is the application of scientific principles and techniques to solve crimes and enforce laws. It involves the collection, preservation, analysis, and interpretation of physical evidence from crime scenes, which can include anything from fingerprints and DNA to digital data and chemical substances.
                </p>
                <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                  By bridging the gap between science and law, forensic science plays a crucial role in the criminal justice system, helping to identify suspects, determine causes of death, and uncover critical facts that can lead to convictions or exonerations.
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
