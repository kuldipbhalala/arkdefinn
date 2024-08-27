import React from 'react'

const Hydrogen = () => {
  return (
    <div className="min-h-[82vh] bg-gradient-to-b from-sky-100 to-blue-200 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
        <div className="bg-white rounded-lg shadow-xl border border-blue-300 overflow-hidden">
          <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
            Breathing Oxygen
            </h2>
          </div>
          <div className="p-6 md:p-8 bg-sky-50">
            <p className="text-base  md:text-lg lg:text-xl text-gray-800 leading-relaxed">
            This device was specially made during the COVID times. However, it will address the issue of low oxygen for troops at high altitudes, especially for medical emergency like hypoxia or illness in the Glacier etc. The machine is battery operated and can be used during bad weather period when flying is not possible and there is a need of breathing oxygen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hydrogen