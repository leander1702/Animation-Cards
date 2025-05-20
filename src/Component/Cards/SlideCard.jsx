import React, { useState, useEffect } from "react";
import course2 from "../../assets/course/course2.png";
import course3 from "../../assets/course/course3.png";
import course4 from "../../assets/course/course4.png";
import course5 from "../../assets/course/course5.png";
import course6 from "../../assets/course/course6.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const SlideCard = () => {
  const [loading, setLoading] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(window.innerWidth < 640 ? 1 : 4); // Initial calculation
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);


  const cardsData = [
    {
      title:"FULL-STACK DEVELOPMENT",
      link: "full-stack-development",
      image: course4,
      desc: " Full Stack Mastery Starts Here",
      
    },
    {
      title:"EMBEDDED SYSTEM",
      link: "embedded-system",
      image: course2,
      desc: " From Sensors to Smart Solutions",
    },
    {
      title:"DATA SCIENCE",
      link: "data-science",
      image: course3,
      desc: "Unlock the Power of Big Data",
    },
    {
      title:"DATA ANALYTICS",
      link: "data-analytics",
      image: course5,
      desc: "From Data to Actionable Insights",
    },
    {
      title:"CLOUD COMPUTING",
      link: "cloud-computing",
      image: course6,
      desc: "Elevate Your Tech with the Cloud",
    },
    {
      title:"SOFTWARE TESTING",
      link: "software-testing",
      image:
        "https://img.freepik.com/premium-photo/concept-testing-technology-internet-networking_220873-12407.jpg?w=1060",
      desc: "Quality assurance and debugging",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setCards(cardsData);
      setLoading(false);
    }, 500); // Simulate loading
  }, []);

  useEffect(() => {
    // Handle window resize and update cardsPerView
    const handleResize = () => {
      setCardsPerView(window.innerWidth < 640 ? 1 : 4); // Adjust based on screen size
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + cardsPerView < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const PlaceholderCard = () => (
    <div className={`w-full md:1/2 lg:w-1/4 flex-shrink-0 p-2 sm:p-4`} id="techcard">
      <div className="bg-gray-200 border border-1 border-gray-300 rounded-lg items-center overflow-hidden text-left shadow-md p-3 animate-pulse" >
        <div className="w-full h-32 bg-gray-300 rounded-lg"></div>
        <div className="p-4">
          <h3 className="text-base font-semibold mb-2 bg-gray-300 h-6 w-48 rounded"></h3>
          <p className="font-medium text-sm text-gray-400 bg-gray-300 h-4 w-32 rounded"></p>
          <div className="flex flex-col-2 sm:flex-row gap-2 sm:gap-4 mt-3 items-center">
            <button className="bg-gray-300 border text-sm font-semibold border-transparent text-transparent px-3 py-2 rounded-md w-24 h-10"></button>
            <button className="bg-gray-300 border text-sm font-semibold border-transparent text-transparent px-3 py-2 rounded-md w-24 h-10"></button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div data-aos="fade-right" data-aos-duration="1000" className="relative overflow-hidden px-5">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex / cardsPerView) * 100}%)`,
        }}
      >
        {loading
          ? Array(cardsPerView)
              .fill(null)
              .map((_, index) => <PlaceholderCard key={index} />)
          : cards.map((card, index) => (
              <div
                key={index}
                className={`w-full md:w-1/2 lg:w-1/4 flex-shrink-0 p-2 sm:p-4`}
              >
                <div className="bg-white border border-1 border-gray-300 rounded-lg items-center overflow-hidden text-left shadow-md p-3">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-base font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="font-medium text-sm text-[#0057D3]">
                      {card.desc}
                    </p>
                    <div className="flex flex-col-2 sm:flex-row gap-2 sm:gap-4 mt-3 items-center">
                      <button
                        className="bg-blue-600 border text-sm font-semibold border-white text-white px-3 py-2 rounded-md  hover:border-[#0057D3] hover:bg-white hover:text-blue-600 transition duration-300"
                        onClick={() => navigate("/Register")}
                      >
                        Demo Class
                      </button>
                      <button
                        className="bg-gray-500 border text-sm font-semibold  border-white text-white px-3 py-2 rounded-md  hover:border-[#0057D3] hover:bg-white hover:text-blue-600 transition duration-300"
                                             
                       
                      >
                        Know More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
        <button
          onClick={handlePrev}
          className={`text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300 ${
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentIndex === 0}
        >
          <BsArrowLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className={`text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full shadow-md transition-colors duration-300 ${
            currentIndex + cardsPerView >= cards.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          disabled={currentIndex + cardsPerView >= cards.length}
        >
          <BsArrowRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SlideCard;
