
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "DIMPLE SHARMA",
      role: "Founder",
      company: "Whizz Dream Big",
      skills: "Quality engineer, Technical writer",
      languages: "Proficient in German, Hindi and English",
      image: "/images/DimpleSharma.png"
    },
    {
      name: "NITESH SHARMA",
      role: "Advisory",
      company: "Whizz Dream Big",
      current: "Alvesian",
      workHistory: "Ernst&Young, BCG, Naviga, ISSC",
      skills: "IT specialist and consultancy",
      languages: "Proficient in Hindi and English",
      image: "/images/NiteshSharma.png"
    },
    {
      name: "RACHNA SHARMA",
      role: "HR partner",
      company: "Whizz Dream Big",
      current: "JOBBSPRANGET At sweden (Talent recruiter)",
      skills: "Data analysis, Talent recruitment for different fields",
      languages: "Proficient in Swedish, Hindi and English",
      image: "/images/RachnaSharma.png"
    }
  ];

  return (
    <section className="bg-gray-50 text-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent text-4xl font-bold mb-4">
            Our Team
          </h2>
          <p className="text-lg text-purple-900 max-w-2xl mx-auto">
            Meet the passionate professionals driving innovation and excellence at Whizz Dream Big
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-yellow-400 overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              </div>
              
              <div className="p-6 space-y-3">
                <div>
                  <span className="font-semibold text-purple-900">Role:</span>
                  <span className="text-gray-700 ml-2">{member.role} ({member.company})</span>
                </div>
                
                {member.current && (
                  <div>
                    <span className="font-semibold text-purple-900">Current:</span>
                    <span className="text-gray-700 ml-2">{member.current}</span>
                  </div>
                )}
                
                {member.workHistory && (
                  <div>
                    <span className="font-semibold text-purple-900">Work History:</span>
                    <span className="text-gray-700 ml-2">{member.workHistory}</span>
                  </div>
                )}
                
                <div>
                  <span className="font-semibold text-purple-900">Skills:</span>
                  <span className="text-gray-700 ml-2">{member.skills}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-purple-900">Languages:</span>
                  <span className="text-gray-700 ml-2">{member.languages}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;