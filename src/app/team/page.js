
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "DIMPLE SHARMA",
      role: "Founder and CEO",
      company: "Whizz Dream Big",
      skills: "Quality engineer, Technical writer",
      languages: "Proficient in German, Hindi and English",
      image: "/images/DimpleSharma.png"
    },
    {
      name: "NITESH SHARMA",
      role: "Co-founder and CTO",
      company: "Whizz Dream Big",
      current: "Alvesian",
      workHistory: "Ernst&Young, BCG, Naviga, ISSC",
      skills: "IT specialist and consultancy",
      languages: "Proficient in Hindi and English",
      image: "/images/NiteshSharma.jpeg"
    },
    {
      name: "RACHNA SHARMA",
      role: "HR partner",
      company: "Whizz Dream Big",
      current: "JOBBSPRANGET At sweden (Talent recruiter)",
      skills: "Data analysis, Talent recruitment for different fields",
      languages: "Proficient in Swedish, Hindi and English",
      image: "/images/RachnaSharma.png"
    },
    {
      name: "VIPUL MITTAL",
      role: "Sr. Partner - Business Advisory",
      company: "Whizz Dream Big",
      highlights: [
        "28+ years leading global Big 4 (EY) consulting offshoring; IIT/IIM grad with leadership courses from Harvard and Wharton.",
        "Global P&L leader driving business transformation and digitization; deploys technology levers to reduce cost and enhance customer experience."
      ],
      image: "/images/vipul_mittal.jpg"
    },
    {
      name: "VINEET VAID",
      role: "Sr. Partner - Financial Services",
      company: "Whizz Dream Big",
      highlights: [
        "25+ years in banking managing both liability and asset businesses; seasoned leader in scaling new lines.",
        "Oversees HNI segment growth across the country, leading product development and cross-selling with full P&L accountability."
      ],
      image: "/images/vineet_vaid.png"
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
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-yellow-400 overflow-hidden flex items-center justify-center bg-white/20">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-sm text-white/80">
                      Photo coming soon
                    </div>
                  )}
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

                {member.skills && (
                  <div>
                    <span className="font-semibold text-purple-900">Skills:</span>
                    <span className="text-gray-700 ml-2">{member.skills}</span>
                  </div>
                )}

                {member.languages && (
                  <div>
                    <span className="font-semibold text-purple-900">Languages:</span>
                    <span className="text-gray-700 ml-2">{member.languages}</span>
                  </div>
                )}

                {member.highlights && member.highlights.length > 0 && (
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {member.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;