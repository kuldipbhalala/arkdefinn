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

    { name: 'Contact', link: '/Contact' },

    // {
    //   name: 'Clients',
    //   Clientsitem: [
    //     { name: 'Client 1', link: '/client1', icon: FaRegBuilding },
    //     { name: 'Client 2', link: '/client2', icon: FaRegBuilding },
    //   ],
    // },
  ];

  const renderNavItem = (item, index) => (
    <li key={index} className="relative group">
      {item.subItems || item.ServicesItems || item.ProductsItems || item.Drone || item.Forensic ? (
        <>
          <button
            className="mx-2 text-white font-bold focus:outline-none flex items-center"
            onClick={() => toggleDropdown(item.name)}
          >
            {item.name}
            {activeDropdown === item.name ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
          </button>
          <span className="absolute top-7 left-2 w-0 h-1 bg-white transition-all duration-300 group-hover:w-[80%]"></span>

          {activeDropdown === item.name && (
            <ul>
              <div className="absolute flex bg-white mt-6 z-10 text-black  shadow-lg rounded-lg divide-y divide-gray-300">
                <div className='flex'>
                  {item.subItems && (
                    <div className="w-[19rem] p-2">
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
                    <div className="w-[19rem] p-2">
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
                </div>

                {item.ServicesItems && (
                  <div className="w-96 p-2">
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
                  <div className="w-56 p-2">
                    <li className="font-bold text-xl px-4 py-2 border-b border-gray-200">
                      ProductsItems
                    </li>
                    {item.ProductsItems.map((serviceItem, serviceIndex) => (
                      <li key={serviceIndex}>
                        <Link className="block px-4 py-2 hover:bg-gray-200 flex items-center" to={serviceItem.link}>
                          <serviceItem.icon className="mr-2" />{serviceItem.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                )}

                {item.Drone && (
                  <div className="w-72 p-2">
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
        <Link className="mx-5 text-white font-bold group" to={item.link}>
          {item.name}
          <span className="absolute top-7 left-5 w-0 h-1 bg-white transition-all duration-300 group-hover:w-[60%]"></span>
        </Link>
      )}
    </li>
  );


  return (
    <>

      {/* top start  */}

      <div className='bg-gradient-to-b from-sky-100 to-blue-200 px-4 py-4 sm:px-6 md:px-8 lg:px-10 xl:px-12'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'>
          <Link to='/' target='_blank' className='mx-2 text-[20px] sm:text-[24px] md:text-[25px] cursor-pointer'>
            <FaFacebookSquare />
          </Link>
          <Link to='/' target='_blank' className='mx-2 text-[20px] sm:text-[24px] md:text-[25px] cursor-pointer'>
            <FaTwitterSquare />
          </Link>
          <Link to='/' target='_blank' className='mx-2 text-[20px] sm:text-[24px] md:text-[25px] cursor-pointer'>
            <FaLinkedin />
          </Link>
          <Link to='/' target='_blank' className='mx-2 text-[20px] sm:text-[24px] md:text-[25px] cursor-pointer'>
            <FaSquareInstagram />
          </Link>
        </div>

        <div className='text-center md:text-left'>
          <h2 className='font-bold text-lg sm:text-xl md:text-1xl'>WORKING HOURS</h2>
          <p className='text-sm font-semibold sm:text-base md:text-base'>
            Monday - Saturday: 9:30am to 5:30pm
          </p>
        </div>
      </div>
    </div>


      <header className=" bg-[#004374] py-2">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className='flex justify-between items-center'>
              <img src={process.env.PUBLIC_URL + '/Logo.png'} alt="Logo" width={100} height={100} />
              <div className='hidden lg:block'>
                <h1 className='text-white md:text-[18px] font-bold px-4 py-1'>Ark Definn Technologies LLP</h1>
                <p className='text-white text-[14px] px-6 text-center' style={{ letterSpacing: '0.1em' }}>We Pave The Way</p>
              </div>
            </div>
            <nav>
              <button className="lg:hidden text-white" onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
              <ul className="hidden lg:flex">
                {navItems.map(renderNavItem)}
              </ul>
            </nav>
            <div className="hidden py-2 lg:px-4 lg:flex justify-end items-center">
              <div className="flex items-center bg-white rounded-full shadow-md overflow-hidden">
                <div className="flex items-center space-x-2 px-4 py-3">
                  <FiPhoneCall className="text-gray-500 font-bold text-[20px] cursor-pointer" />
                  <span className="text-sm font-medium text-gray-700">Any Queries</span>
                  <Link to="tel:+4733378901" className="text-sm font-bold text-gray-900">+990-737 621 432</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-32 left-0 w-full h-screen bg-[#004374] text-white overflow-y-auto z-50">
            <ul className="container mx-auto flex flex-col space-y-4 py-6 px-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.subItems || item.ServicesItems || item.Drone ? (
                    <>
                      <button
                        className="text-white font-bold focus:outline-none flex items-center w-full justify-between"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        {item.name}
                        {activeDropdown === item.name ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                      </button>
                      {activeDropdown === item.name && (
                        <ul className="flex flex-col space-y-2 mt-4 bg-[#1c49ae] rounded-md">
                          {item.subItems && (
                            <>
                              {item.companyTitle && (
                                <li className="font-bold text-lg px-4 py-2 border-b border-gray-200 text-white">
                                  {item.companyTitle}
                                </li>
                              )}
                              {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link className="block px-4 py-2 hover:bg-gray-200 hover:text-[#044e80] flex items-center rounded-md transition-colors duration-300" to={subItem.link}>
                                    <subItem.icon className="mr-2" />{subItem.name}
                                  </Link>
                                </li>
                              ))}
                              {item.personnel && (
                                <>
                                  <li className="font-bold text-md px-4 py-2 border-b border-gray-200 text-white mt-2">
                                    Personnel
                                  </li>
                                  {item.personnel.map((person, personIndex) => (
                                    <li key={personIndex}>
                                      <Link className="block px-4 py-2 hover:bg-gray-200 hover:text-[#044e80] flex items-center rounded-md transition-colors duration-300" to={person.link}>
                                        <person.icon className="mr-2" />{person.name}
                                      </Link>
                                    </li>
                                  ))}
                                </>
                              )}
                            </>
                          )}
                          {item.ServicesItems && (
                            <>
                              <li className="font-bold text-md px-4 py-2 border-b border-gray-200 text-white mt-2">
                                Services
                              </li>
                              {item.ServicesItems.map((serviceItem, serviceIndex) => (
                                <li key={serviceIndex}>
                                  <Link className="block px-4 py-2 hover:bg-gray-200 hover:text-[#044e80] flex items-center rounded-md transition-colors duration-300" to={serviceItem.link}>
                                    <serviceItem.icon className="mr-2" />{serviceItem.name}
                                  </Link>
                                </li>
                              ))}
                            </>
                          )}
                          {item.Drone && (
                            <>
                              {item.Drone.map((droneItem, droneIndex) => (
                                <div key={droneIndex}>
                                  <button
                                    className="text-white font-bold focus:outline-none flex items-center w-full justify-between"
                                    onClick={() => toggleAdmissionDropdown(droneItem.name)}
                                  >
                                    {droneItem.name}
                                    {activeAdmissionDropdown === droneItem.name ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                                  </button>

                                  {activeAdmissionDropdown === droneItem.name && droneItem.AdmissionDrone && (
                                    <ul className="pl-6 bg-[#1c49ae] rounded-md">
                                      {droneItem.AdmissionDrone.map((admissionItem, admissionIndex) => (
                                        <li key={admissionIndex}>
                                          <Link className="block px-4 py-2 hover:bg-gray-200 hover:text-[#044e80] flex items-center rounded-md transition-colors duration-300" to={admissionItem.link}>
                                            <admissionItem.icon className="mr-2" />{admissionItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}

                                </div>
                              ))}
                            </>
                          )}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link className="text-white hover:text-[#8a1287] font-bold block py-2" to={item.link}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="container mx-auto py-6 px-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2">
                  <h3 className="text-white font-bold text-lg">Any Queries? Call us?</h3>
                </div>
                <div className="p-4">
                  <p className="text-gray-600 mb-2">We're here to help! Contact us:</p>
                  <div className="flex items-center space-x-3 bg-gray-100 rounded-full px-4 py-2">
                    <FiPhoneCall className="text-blue-500 text-xl" />
                    <Link
                      to="tel:+990737621432"
                      className="text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300"
                    >
                      +990-737 621 432
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


      </header>
    </>

  );
};

export default Header;