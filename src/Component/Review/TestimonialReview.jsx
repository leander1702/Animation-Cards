import { CgProfile } from "react-icons/cg";
function TestimonialReview() {
  const reviews = [
    {
        img: "https://via.placeholder.com/100",
        name: "Jeevitha",
        position: "UI/UX Designer",
        review: "I joined for a UI/UX course. The experience has been great—the trainers explain concepts clearly, and the environment is pleasant."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Sri Ganth",
        position: "Software Developer",
        review: "The course gave a solid intro to datasets, supervised and unsupervised learning, along with hands-on practice using Python libraries like NumPy and scikit-learn."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Nelson Joseph Raja",
        position: "Software Developer",
        review: "We learned a lot, especially about Git and GitHub. The course structure was clear and affordable. Thank you!"
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Infant",
        position: "Web Developer",
        review: "Learned a lot at the Coimbatore branch. The Git and GitHub sessions were amazing and easy to understand. The trainer was excellent."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Ranjith",
        position: "Full Stack Developer",
        review: "Great experience! The staff explained concepts very well. No negative feedback at all."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Suresh",
        position: "IOT Developer",
        review: "The IoT course was hands-on and engaging. We built real-time projects using sensors and Raspberry Pi. Highly recommended!"
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Karthik",
        position: "Embedded Systems Engineer",
        review: "Loved the Embedded Systems course. We worked on ARM architecture and real-time OS. The instructors were very knowledgeable."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Meera Thomas",
        position: "Software Tester",       
        review: "The Software Testing course covered both manual and automation testing tools like Selenium. Very practical and industry-focused."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Sudha",
        position: "Data Scientist",       
        review: "I joined the Data Science course. The topics were well-structured—from Python to machine learning. It was very insightful."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Subiksha",
        position: "Data Analyst",
        review: "The Data Analytics course helped me a lot. We used tools like Excel, Power BI, and Tableau for real-world analysis tasks."
    },
    {
        img: "https://via.placeholder.com/100",
        name: "Siva",
        review: "Cloud Computing training was amazing. We explored AWS and Azure platforms, and got hands-on with deployments and services."
    }
];
  

  return (
    <>
      <div className="w-full overflow-hidden py-10">
        <div className="flex w-max animate-marquee space-x-20 ">
          {/* Duplicating reviews to make smooth infinite animation */}
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="text-center w-72 p-6 bg-white shadow-2xl rounded-lg transition-transform transform hover:scale-105"
            >
              <div className="flex items-center  gap-2 ">
                <CgProfile className="w-10 h-10  text-[#0057D3]" />
                <div className="text-left mt-2">
                  <h2 className="font-semibold text-base">{review.name}</h2>
                   <p className="text-gray-600 text-xs">{review.position}</p>
                   <div className="text-yellow-500 text-sm  text-left">★★★★★</div>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-3 text-left">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default TestimonialReview;
