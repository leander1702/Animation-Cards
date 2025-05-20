import { FaAws,FaJava , FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaPython, FaDatabase, FaGit, FaGithub, FaNodeJs } from "react-icons/fa";
import { BiBrain } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { MdMemory } from "react-icons/md";

function SlideLogos() {
  const tools = [
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
    { name: "", icon: <FaAws />, color: "text-amber-500" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "React", icon: <FaReact />, color: "text-cyan-500" },
    { name: "Python", icon: <FaPython />, color: "text-blue-500" },
    {name:"Java" , icon: <FaJava />,color: "text-red-500"},
    { name: "SQL", icon: <FaDatabase />, color: "text-orange-500" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "", icon: <FaGit />, color: "text-red-500" },
    { name: "Data Science", icon: <BiBrain />, color: "text-purple-500" },
    { name: "IoT", icon: <GiNetworkBars />, color: "text-green-500" },
    { name: "Embedded Systems", icon: <MdMemory />, color: "text-gray-500" },    
  ];


  return (
    <div  className="bg-blue-30" id="logo">
      <div className="justify-center text-center items-center">
        <h1 data-aos="fade-down" className="font-semibold text-2xl lg:text-3xl   mt-5 text-[#0057D3]">
          Our Technologies
        </h1>
        <h4 className="font-normal text-lg text-gray-600 text-center mt-4">
        Transforming ideas into solutions with innovative technology tools
            </h4>           
      </div>

      <div className="w-full overflow-hidden py-5 pb-5">
        <div className="flex w-max animate-marquee lg:space-x-20 space-x-4">
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="flex text-6xl pt-3 mb-5 transition-transform hover:scale-110 p-6 flex-col items-center justify-center"
            >
              <div className={`${tool.color}`}>{tool.icon}</div>
              <div>
              <p className={`text-center text-lg font-semibold ml-2 ${tool.color}`}>
                {tool.name}
              </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default SlideLogos;