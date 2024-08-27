import React from 'react';

const SunDryFoods = () => {
  return (
    <div className="h-[82vh] bg-gradient-to-b from-sky-100 to-blue-200 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="bg-white rounded-lg shadow-xl border border-blue-300 overflow-hidden">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
              Sun Dry Foods
            </h2>
          </div>
          <div className="p-6 md:p-8 bg-sky-50">
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6">
              Our startup has developed an innovative solar (sun) dryer to address the challenges faced by farmers due to low prices for fruits and vegetables during peak season. This technology allows us to sun-dry produce, enabling off-season marketing at fair prices and ensuring decent income for farmers.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed">
              Our sun-dried vegetables and fruits offer extended shelf life without preservatives, making them ideal for remote locations and ensuring access to tropical flavors anywhere. These products are particularly suitable for Indian Air Force personnel stationed in isolated and challenging environments. They're also perfect for hiking, trekking, and mountaineering enthusiasts. Our goal is to provide highly nutritious food options for survival packs and extreme conditions, ensuring that high-quality, nutritious meals are always available to our brave air warriors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunDryFoods;