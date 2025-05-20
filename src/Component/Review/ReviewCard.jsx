function ReviewCard() {
    const reviews = [
        {
            img: "https://via.placeholder.com/100",
            name: "Jeevitha",
            review: "I joined for a UI/UX course. The experience has been great—the trainers explain concepts clearly, and the environment is pleasant."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Sri Ganth",
            review: "The course gave a solid intro to datasets, supervised and unsupervised learning, along with hands-on practice using Python libraries like NumPy and scikit-learn."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Nelson Joseph Raja",
            review: "We learned a lot, especially about Git and GitHub. The course structure was clear and affordable. Thank you!"
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Infant",
            review: "Learned a lot at the Coimbatore branch. The Git and GitHub sessions were amazing and easy to understand. The trainer was excellent."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Ranjith",
            review: "Great experience! The staff explained concepts very well. No negative feedback at all."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Suresh",
            review: "The IoT course was hands-on and engaging. We built real-time projects using sensors and Raspberry Pi. Highly recommended!"
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Karthik",
            review: "Loved the Embedded Systems course. We worked on ARM architecture and real-time OS. The instructors were very knowledgeable."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Meera Thomas",
            review: "The Software Testing course covered both manual and automation testing tools like Selenium. Very practical and industry-focused."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Sudha",
            review: "I joined the Data Science course. The topics were well-structured—from Python to machine learning. It was very insightful."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Subiksha",
            review: "The Data Analytics course helped me a lot. We used tools like Excel, Power BI, and Tableau for real-world analysis tasks."
        },
        {
            img: "https://via.placeholder.com/100",
            name: "Niranjan",
            review: "Cloud Computing training was amazing. We explored AWS and Azure platforms, and got hands-on with deployments and services."
        }
    ];
    

    return (
        <>
            <div className="w-full bg-gray-100 overflow-hidden py-10 ">
                <div className="flex w-max animate-marquee space-x-20 ">
                    {/* Duplicating reviews to make smooth infinite animation */}
                    {[...reviews, ...reviews].map((review, index) => (
                        <div key={index} className="text-center w-60 p-3 bg-white shadow-2xl rounded-lg transition-transform transform hover:scale-105">
                           
                                <i class="bi bi-person-circle text-6xl lg:text-6xl text-[#0057D3] "></i>
                                
                       
                            <h3 className="text-lg font-semibold mt-3">{review.name}</h3>
                            <div className="text-yellow-500 text-xl mt-1">
                                ★★★★★
                            </div>
                            <p className="text-sm text-gray-600 mt-3 text-balance">
                                {review.review}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ReviewCard;