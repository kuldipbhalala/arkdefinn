import React from 'react'

const NanoForensics = () => {
    return (
        <div className="min-h-[82vh] bg-gradient-to-b from-sky-100 to-blue-200 py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-24">
                <div className="bg-white rounded-lg shadow-xl border border-blue-300 overflow-hidden">
                    <div className="bg-gradient-to-r from-sky-500 to-blue-600 p-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-2">
                            Nano Forensic
                        </h2>
                    </div>
                    <div className="p-6 md:p-8 bg-sky-50">
                        <p className="text-base  break-all md:text-lg lg:text-xl text-gray-800 leading-relaxed mb-6">
                            Nano forensic is an emerging field within forensic science that involves the application of nanotechnology to the detection, analysis, and interpretation of forensic evidence at the nanoscale. This cutting-edge approach leverages the unique properties of nanomaterials and nanoscale techniques to enhance the sensitivity and accuracy of forensic investigations. Nano forensic techniques can be used to detect trace amounts of substances, analyze extremely small biological samples, and improve the resolution of imaging techniques, making it possible to uncover evidence that might be missed by traditional forensic methods. At ARK Defin Technologies LLP, we integrate cutting-edge nanotechnology with forensic science to push the boundaries of what is possible in evidence analysis and crime investigation.
                        </p>
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Services Offered by the Company:</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-800">
                                <li>Synthesis of Nanoparticles </li>
                                <li>Development of fingerprint by nanoparticles</li>
                                <li>R&D in nanomaterials</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NanoForensics