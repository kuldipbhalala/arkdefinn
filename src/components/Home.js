import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaFighterJet, FaInfoCircle, FaComment, FaUser, FaEnvelope, FaPhone } from "react-icons/fa";

const Home = () => {
  const slides = [
    {
      image: "cr7.webp",
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      image: "AVcr03.webp",
      title: "Slide 2",
      description: "This is the second slide.",
    },
    {
      image: "Slide03.png",
      title: "Slide 3",
      description: "This is the third slide.",
    },
  ];

  const [formData, setFormData] = useState({
    namefordata: "",
    email: "",
    phone: "",
    intested: "",
    comment: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.namefordata || !formData.email || !formData.phone || !formData.intested || !formData.comment) {
      console.log("All fields are required.");
      return;
    }

    console.log("Form submitted:", formData);

    setFormData({
      namefordata: "",
      email: "",
      phone: "",
      intested: "",
      comment: ""
    });
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const marqueeText = "Welcome to Indian Air Force - Touch the Sky with Glory | Join us in serving the nation | Fly high with pride";

  return (
    <>
      <section>
        <div className="w-full h-screen">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            interval={3000}
            stopOnHover
            swipeable
            dynamicHeight={false}
            className="h-full"
            renderArrowPrev={(clickHandler) => (
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 mx-4 bg-white hover:bg-[#034d82] p-4 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
                onClick={clickHandler}
              >
                <FaFighterJet className="text-black" />
              </button>
            )}
            renderArrowNext={(clickHandler) => (
              <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 mx-4 bg-white hover:bg-[#034d82] p-4 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
                onClick={clickHandler}
              >
                <FaFighterJet className="text-black hover:text-white text-5xl transition-colors duration-300" />
              </button>
            )}
            renderIndicator={(clickHandler, isSelected, index) => (
              <li
                onClick={clickHandler}
                className={`inline-block mx-2 my-4 cursor-pointer w-4 h-4 rounded-full transition-all duration-300 ${isSelected ? 'bg-white scale-125' : 'bg-gray-400 hover:bg-gray-200'}`}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`Slide ${index + 1}`}
              />
            )}
          >
            {slides.map((slide, index) => (
              <div key={index} className="relative w-full h-[100vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="bg-[#034d82] text-white py-2 overflow-hidden">
          <div className="whitespace-nowrap inline-block animate-marquee">
            {marqueeText}
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gradient-to-b from-sky-100 to-blue-200 py-12">
          <div className="container mx-auto px-6">
            <div className="text-4xl font-bold text-center mb-8 text-gray-800">
              CONTACT US FOR ENQUIRY
            </div>
            <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="p-3 bg-blue-500 text-white">
                    <FaUser />
                  </span>
                  <input
                    className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0"
                    type="text"
                    value={formData.namefordata}
                    id="name"
                    name="namefordata"
                    onChange={handleChanges}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="p-3 bg-blue-500 text-white">
                    <FaEnvelope />
                  </span>
                  <input
                    className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0"
                    type="email"
                    value={formData.email}
                    name="email"
                    id="email"
                    onChange={handleChanges}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="p-3 bg-blue-500 text-white">
                    <FaPhone />
                  </span>
                  <input
                    className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0"
                    type="tel"
                    value={formData.phone}
                    name="phone"
                    onChange={handleChanges}
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="p-3 bg-blue-500 text-white">
                    <FaInfoCircle />
                  </span>
                  <input
                    className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0"
                    type="text"
                    value={formData.intested}
                    onChange={handleChanges}
                    id="intested"
                    name="intested"
                    placeholder="Interested In"
                    required
                  />
                </div>
                <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <span className="p-3 bg-blue-500 text-white">
                    <FaComment />
                  </span>
                  <input
                    className="w-full px-4 py-2 border-none focus:outline-none focus:ring-0"
                    type="text"
                    value={formData.comment}
                    onChange={handleChanges}
                    name="comment"
                    id="comment"
                    placeholder="Your Comments"
                    required
                  />
                </div>
                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    SEND ENQUIRY
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
