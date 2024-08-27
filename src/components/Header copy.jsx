import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUsers, FaHistory, FaTasks, FaBox, FaSearch, FaRegBuilding, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeAdmissionDropdown, setActiveAdmissionDropdown] = useState(null);



  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
    setActiveAdmissionDropdown(null);
  };

  const toggleAdmissionDropdown = (dropdownName) => {
    setActiveAdmissionDropdown(activeAdmissionDropdown === dropdownName ? null : dropdownName);
  };

  useEffect(() => {
    setActiveDropdown(null);
    setActiveAdmissionDropdown(null);
  }, [location]);

  const navItems = [
    { name: 'Home', link: '/' },
    {
      companyTitle: 'Ark Definn Technologies LLP',
      name: 'About Us',
      subItems: [
        { name: 'Brief about the company', link: '/Briefabout', icon: FaUsers },
        { name: 'Chairman & Managing Director', link: '/leadership', icon: FaUsers },
        { name: 'Directors', link: '/staff', icon: FaUsers },
        { name: 'Mentors', link: '/staff', icon: FaUsers },
      ],
      personnel: [
        { name: 'Our Team', link: '/our-team', icon: FaUsers },
        { name: 'Aim', link: '/mission-values', icon: FaTasks },
        { name: 'Vision & Mission', link: '/Vision', icon: FaHistory },
      ],
    },

    {
      name: 'Services', link: '/services',
      ServicesItems: [
        { name: 'Import & Export', link: '/product1', icon: FaBox },
        {
          name: 'Forensic Science',
          icon: FaBox,
          Forensic: [
            { name: 'Forensic Science', link: '/ForensicScience', icon: FaSearch },
            { name: 'Forensic Toxicology', link: '/ForensicToxicology', icon: FaSearch },
            { name: 'Nano Forensics', link: '/NanoForensics', icon: FaSearch },
            { name: 'Crime Scene Management ', link: '/forensic/contact', icon: FaSearch },
            { name: 'Forensic Document Examination', link: '/forensic/contact', icon: FaSearch },
            { name: 'Fingerprint Examination', link: '/forensic/contact', icon: FaSearch },
            { name: 'Forensic Ballistics', link: '/forensic/contact', icon: FaSearch },
            { name: 'Digital Forensics', link: '/forensic/contact', icon: FaSearch },
          ]
        },
        { name: 'GIS', link: '/GIS', icon: FaBox },
      ],
    },

    {
      name: 'Products', link: '/services',
      ProductsItems: [
        { name: 'Sun Dry Foods', link: '/SunDryFoods', icon: FaBox },
        { name: 'HHO', link: '/products', icon: FaBox },
        { name: 'Breathing Hydrogen', link: '/Hydrogen', icon: FaBox },
        { name: 'Breathing Oxygen', link: '/Oxygen', icon: FaBox },
      ],
    },

    // {
    //   name: 'R & D',
    //   Ritems: [
    //     { name: 'Research 1', link: '/research1', icon: FaSearch },
    //     { name: 'Research 2', link: '/research2', icon: FaSearch },
    //   ],
    // },

    {
      name: 'Drone (RPTO)',
      Drone: [
        {
          name: 'Admission',
          icon: FaSearch,
          AdmissionDrone: [
            { name: 'Application Form', link: '/admission/form', icon: FaSearch },
            { name: 'Admission Requirements', link: '/admission/requirements', icon: FaSearch },
            { name: 'Contact Admissions', link: '/admission/contact', icon: FaSearch }
          ]
        },
        { name: 'Training Programme', link: '/Training', icon: FaSearch },
        { name: 'Our-Drones', link: '/drone/our-drones', icon: FaSearch },
        { name: 'Courses', link: '/Consters', icon: FaSearch },
      ],
    },

    {
      name: 'Clients',
      Clientsitem: [
        { name: 'Client 1', link: '/client1', icon: FaRegBuilding },
        { name: 'Client 2', link: '/client2', icon: FaRegBuilding },
      ],
    },
  ];

  const renderNavItem = (item, index) => (
    <li key={index} className="relative group py-2 lg:py-0">
      {item.subItems || item.ServicesItems || item.ProductsItems || item.Drone || item.Forensic ? (
        <>
          <button
            className="w-full lg:w-auto text-left lg:text-center text-white font-bold focus:outline-none flex items-center justify-between lg:justify-center"
            onClick={() => toggleDropdown(item.name)}
          >
            {item.name}
            {activeDropdown === item.name ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          <span className="hidden lg:block absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>

          {activeDropdown === item.name && (
            <ul className="lg:absolute lg:top-full lg:left-0 w-full lg:w-auto bg-white mt-2 lg:mt-0 shadow-lg rounded-lg divide-y divide-gray-300">
              <div className="flex flex-col lg:flex-row">
                {item.subItems && (
                  <div className="w-full lg:w-64 p-2">
                    {item.companyTitle && (
                      <li className="font-bold text-lg px-4 py-2 border-b border-gray-200">
                        {item.companyTitle}
                      </li>
                    )}
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={subItem.link}>
                          <subItem.icon className="mr-2" />{subItem.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}

                {item.personnel && (
                  <div className="w-full lg:w-64 p-2">
                    <li className="font-bold text-xl px-4 py-2 border-b border-gray-200">
                      Personnel
                    </li>
                    {item.personnel.map((person, personIndex) => (
                      <li key={personIndex}>
                        <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={person.link}>
                          <person.icon className="mr-2" />{person.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}

                {item.ServicesItems && (
                  <div className="w-full lg:w-96 p-2">
                    <li className="font-bold text-xl px-4 py-2 border-b border-gray-200">
                      Services
                    </li>
                    {item.ServicesItems.map((serviceItem, serviceIndex) => (
                      <li key={serviceIndex}>
                        {serviceItem.Forensic ? (
                          <>
                            <button
                              className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center justify-between"
                              onClick={() => toggleAdmissionDropdown(serviceItem.name)}
                            >
                              <span className="flex items-center">
                                <serviceItem.icon className="mr-2" />{serviceItem.name}
                              </span>
                              {activeAdmissionDropdown === serviceItem.name ? (
                                <FaChevronUp />
                              ) : (
                                <FaChevronDown />
                              )}
                            </button>

                            {activeAdmissionDropdown === serviceItem.name && (
                              <div className='pl-6 bg-gray-100'>
                                <ul>
                                  {serviceItem.Forensic.map((forensicItem, forensicIndex) => (
                                    <li key={forensicIndex}>
                                      <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={forensicItem.link}>
                                        <forensicItem.icon className="mr-2" />{forensicItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </>
                        ) : (
                          <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={serviceItem.link}>
                            <serviceItem.icon className="mr-2" />{serviceItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </div>
                )}

                {item.ProductsItems && (
                  <div className="w-full lg:w-56 p-2">
                    <li className="font-bold text-xl px-4 py-2 border-b border-gray-200">
                      Products
                    </li>
                    {item.ProductsItems.map((productItem, productIndex) => (
                      <li key={productIndex}>
                        <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={productItem.link}>
                          <productItem.icon className="mr-2" />{productItem.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}

                {item.Drone && (
                  <div className="w-full lg:w-72 p-2">
                    <li className="font-bold text-xl px-4 py-2 border-b border-gray-200">
                      Drone
                    </li>
                    {item.Drone.map((droneItem, droneIndex) => (
                      <li key={droneIndex}>
                        {droneItem.AdmissionDrone ? (
                          <>
                            <button
                              className="w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center justify-between"
                              onClick={() => toggleAdmissionDropdown(droneItem.name)}
                            >
                              <span className="flex items-center">
                                <droneItem.icon className="mr-2" />{droneItem.name}
                              </span>
                              {activeAdmissionDropdown === droneItem.name ? (
                                <FaChevronUp />
                              ) : (
                                <FaChevronDown />
                              )}
                            </button>

                            {activeAdmissionDropdown === droneItem.name && (
                              <ul className="pl-6 bg-gray-100">
                                {droneItem.AdmissionDrone.map((admissionItem, admissionIndex) => (
                                  <li key={admissionIndex}>
                                    <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={admissionItem.link}>
                                      <admissionItem.icon className="mr-2" />{admissionItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={droneItem.link}>
                            <droneItem.icon className="mr-2" />{droneItem.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </div>
                )}
              </div>
            </ul>
          )}
        </>
      ) : (
        <Link className="block lg:inline-block text-white font-bold group" to={item.link}>
          {item.name}
          <span className="hidden lg:block absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Link>
      )}
    </li>
  );


  return (
    <>

      {/* top start  */}

   
      <div className='bg-gradient-to-b from-sky-100 to-blue-200 px-4 py-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='flex justify-center md:justify-start mb-4 md:mb-0 space-x-4'>
            <Link to='/' target='_blank' className='text-2xl md:text-3xl'>
              <FaFacebookSquare />
            </Link>
            <Link to='/' target='_blank' className='text-2xl md:text-3xl'>
              <FaTwitterSquare />
            </Link>
            <Link to='/' target='_blank' className='text-2xl md:text-3xl'>
              <FaLinkedin />
            </Link>
            <Link to='/' target='_blank' className='text-2xl md:text-3xl'>
              <FaSquareInstagram />
            </Link>
          </div>

          <div className='text-center md:text-right'>
            <h2 className='font-semibold text-lg md:text-xl'>WORKING HOURS</h2>
            <p className='text-sm md:text-base'>
              Monday - Saturday: 9:30am to 5:30pm
            </p>
          </div>
        </div>
      </div>

      <header className="bg-[#004374] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className='flex items-center mb-4 lg:mb-0'>
              <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Logo" className="w-16 h-16 md:w-24 md:h-24" />
              <div className='ml-4'>
                <h1 className='text-white text-lg md:text-xl font-bold'>Ark Definn Technologies LLP</h1>
                <p className='text-white text-xs md:text-sm tracking-wider'>We Pave The Way</p>
              </div>
            </div>
            
            <nav className="w-full lg:w-auto">
              <button className="lg:hidden w-full text-white py-2" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              </button>
              <ul className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0`}>
                {navItems.map(renderNavItem)}
              </ul>
            </nav>
            
            <div className="hidden lg:flex items-center bg-white rounded-full shadow-md overflow-hidden mt-4 lg:mt-0">
              <div className="flex items-center space-x-2 px-4 py-2">
                <FiPhoneCall className="text-gray-500 text-xl" />
                <span className="text-sm font-medium text-gray-700">Any Queries</span>
                <Link to="tel:+4733378901" className="text-sm font-bold text-gray-900">+990-737 621 432</Link>
              </div>
            </div>
          </div>
        </div>
      </header>


    </>

  );
};

export default Header;