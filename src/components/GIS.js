import React from 'react';

const GIS = () => {
  return (
    <div className="bg-sky-50 min-h-screen font-sans">
      <header className="bg-gradient-to-b from-sky-100 to-blue-300 text-navy-900 py-12">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold  mb-2">Geospatial Intelligence Services</h1>
          <p className="text-xl py-4 tracking-[.25em] font-semibold">ARK Definn TECHNOLOGIES LLP</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <section className="mb-16 bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg leading-relaxed text-navy-800">
            Our Geospatial services, tailored for the Indian Air Force, harness cutting-edge technology and data analytics to deliver critical insights for aerial defense, strategic planning, and mission support. Our solutions empower the IAF to make informed, data-driven decisions by providing an in-depth understanding of both airspace and ground environments.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-navy-900 border-b-4 border-orange-500 pb-2">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Satellite Imagery", desc: "High-resolution satellite data for aerial reconnaissance and strategic planning." },
              { title: "Aerial Photography & Drone Data", desc: "Real-time data acquisition for mission planning and execution." },
              { title: "Geographic Information Systems (GIS)", desc: "Comprehensive GIS analysis for air base management and tactical operations." },
              { title: "Airspace Mapping", desc: "Detailed digital mapping of airspace and flight corridors for enhanced air traffic management." },
              { title: "Data Integration & Visualization", desc: "Combining diverse datasets for comprehensive situational awareness." },
              { title: "GIS Web Development", desc: "Secure, interactive platforms for real-time geospatial intelligence sharing." }
            ].map((item, index) => (
              <div key={index} className="bg-sky-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold mb-3 text-navy-900">{item.title}</h3>
                <p className="text-navy-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-navy-900 border-b-4 border-green-500 pb-2">Key Services for IAF</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
              <h3 className="text-2xl font-semibold mb-3 text-navy-900">Aerial Defense Intelligence</h3>
              <p className="text-navy-700">Mission-critical geospatial intelligence for air defense operations, border security, and strategic aerial initiatives.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
              <h3 className="text-2xl font-semibold mb-3 text-navy-900">Custom Airspace Solutions</h3>
              <p className="text-navy-700">Development of tailored geospatial tools and solutions to address specific IAF operational needs.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold mb-8 text-navy-900 border-b-4 border-orange-500 pb-2">Why Choose ARK for IAF?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Tailored for IAF', 'Advanced Defense Tech', 'Proven Security Track Record', 'End-to-end Support'].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-200 to-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-semibold mb-3 text-navy-900">{item}</h3>
                <p className="text-sm text-navy-700">We provide {item.toLowerCase()} to ensure the highest quality outcomes for the Indian Air Force.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-navy-900 text-white py-6 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 ARK Definn TECHNOLOGIES LLP. Proudly serving the Indian Air Force.</p>
        </div>
      </footer>
    </div>
  );
}

export default GIS;
