import React, { useState } from 'react';

const Training = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Day 1', form: <DayForm day={1} /> },
    { title: 'Day 2', form: <DayForm day={2} /> },
    { title: 'Day 3', form: <DayForm day={3} /> },
    { title: 'Day 4', form: <DayForm day={4} /> },
    { title: 'Day 5', form: <DayForm day={5} /> },
    { title: '(+2 Day Reserved)', form: <DayForm day={6} /> },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-indigo-200 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-indigo-800 mb-4 sm:mb-8">Drone Training Program</h1>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex-grow sm:flex-1 px-3 py-2 sm:px-6 sm:py-4 text-sm sm:text-lg font-medium focus:outline-none transition-colors duration-200 ${
                  activeTab === index
                    ? 'text-indigo-600 bg-indigo-50 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:bg-indigo-50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="p-4 sm:p-6">{tabs[activeTab].form}</div>
        </div>
      </div>
    </div>
  );
};

const DayForm = ({ day }) => {
  const scheduleData = {
    1: [
      { title: 'Stakeholders & their laws [Basic]', classes: 1, hours: '01:30' },
      { title: 'Basic principles of flight', classes: 1, hours: '01:30' },
      { title: 'ATC procedures & Radio Telephony (non FRTOL)', classes: 1, hours: '01:30' },
      { title: 'Fixed-wing Operations and Aerodynamics', classes: 1, hours: '01:30' },
      { title: 'Rotorcraft Operations and Aerodynamics', classes: 1, hours: '01:30' },
      { title: 'Hybrid Operations and Aerodynamics', classes: 1, hours: '01:30' },
    ],
    2: [
      { title: 'Weather and Meteorology', classes: 1, hours: '01:30' },
      { title: 'Drone Equipment Maintenance', classes: 1, hours: '01:30' },
      { title: 'Risk Assessment & Analysis - Safety Management / TEM', classes: 1, hours: '01:30' },
      { title: 'Payload, Installation and Utilization', classes: 1, hours: '01:30' },
      { title: 'Intro to Drone Data & Analysis', classes: 1, hours: '01:30' },
    ],
    3: [
      { title: 'Final Test - Theory', classes: 1, hours: '00:40' },
      { title: 'Flight Simulator Training', classes: 1, hours: '02:45' },
      { title: 'Flight Simulator Training Testing', classes: 1, hours: '00:15' },
      { title: 'Basic Assembly & Maintenance', classes: 1, hours: '02:00' },
      { title: 'Practical Flying with Instructor/ Solo Flying', classes: 1, hours: '04:10' },
    ],
    4: [
      { title: 'Practical Flying with Instructor/ Solo Flying', classes: '1', hours: '04:10 (Continued)' },
    ],
    5: [
      { title: 'Practical Flying with Instructor/ Solo Flying', classes: '1', hours: '04:10 (Continued)' },
      { title: 'Final Test - Multirotor', classes: '1', hours: '00:20' },
    ],
    6: [
      { title: 'Practical Flying with Instructor/ Solo Flying', classes: '-', hours: '......' },
    ],
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-indigo-100">
          <tr>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
              Title of The Subject
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
              Number of Classes
            </th>
            <th className="px-4 py-2 sm:px-6 sm:py-3 text-left text-xs font-semibold text-indigo-800 uppercase tracking-wider">
              Hours
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-indigo-200">
          {scheduleData[day].map((item, index) => (
            <tr key={index} className="hover:bg-indigo-50 transition-colors duration-150">
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-normal sm:whitespace-nowrap text-xs sm:text-sm text-gray-800">{item.title}</td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">{item.classes}</td>
              <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-600">{item.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Training;