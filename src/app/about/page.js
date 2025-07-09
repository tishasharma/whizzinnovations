'use client'

const aboutPage = () => {
  const sliderImages = [
    {
      src: "/images/1.jpg",
      title: "Innovation Hub",
      description: "Our state-of-the-art innovation center where cutting-edge ideas come to life"
    },
    {
      src: "/images/2.jpg",
      title: "AI Development",
      description: "Advanced artificial intelligence solutions transforming businesses worldwide"
    },
    {
      src: "/images/3.jpg",
      title: "Team Collaboration",
      description: "Expert developers and consultants working together on groundbreaking projects"
    },
    {
      src: "/images/4.jpg",
      title: "Global Impact",
      description: "Delivering technology solutions that make a difference across continents"
    },
    {
      src: "/images/5.jpg",
      title: "Education & Training",
      description: "Empowering the next generation through comprehensive technology education"
    },
    {
      src: "/images/6.jpg",
      title: "Software Excellence",
      description: "Creating robust, scalable software solutions for modern challenges"
    },
    {
      src: "/images/7.jpg",
      title: "Global Impact",
      description: "Delivering technology solutions that make a difference across continents"
    },
    {
      src: "/images/8.jpg",
      title: "Education & Training",
      description: "Empowering the next generation through comprehensive technology education"
    },
    {
      src: "/images/9.jpg",
      title: "Software Excellence",
      description: "Creating robust, scalable software solutions for modern challenges"
    }
  ];

  return (
    <>
      <section id="about" className="bg-gray-50 py-20 px-6 text-white">
          <div className="max-w-4xl mx-auto text-center">
          <h3 className="bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent text-3xl font-bold mb-6">About Us</h3>
          <p className="text-lg leading-relaxed text-purple-900">Whizz Dream Big is dedicated to technological excellence and global impact. From high-end consulting to grassroots education, our mission is to bridge innovation with accessibility through solutions in AI, IT services, software, and hardware. We aim to empower businesses and individuals to dream big — and build bigger.</p>
          </div>
      </section>

      {/* Infinite Image Slider */}
      <section className="bg-gray-50 py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-purple-900 mb-12">Our Journey in Innovation</h3>
          
          <div className="relative">
            <div className="flex animate-scroll space-x-8">
              {/* First set of images */}
              {sliderImages.map((image, index) => (
                <div 
                  key={`first-${index}`}
                  className="flex-shrink-0 w-80 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden rounded-lg bg-white shadow-lg border border-gray-200">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="font-bold text-lg mb-1">{image.title}</h4>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-purple-900 mb-2 group-hover:text-blue-900 transition-colors duration-300">{image.title}</h4>
                      <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-180%);
            }
          }
          
          .animate-scroll {
            animation: scroll 25s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          
          /* Mobile - faster animation */
          @media (max-width: 640px) {
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-710%);
              }
            }
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
          }
          
          /* Tablet - medium speed */
          @media (min-width: 641px) and (max-width: 1024px) {
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-250%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          }
          
          /* Desktop - slower, original speed */
          @media (min-width: 1025px) {
            .animate-scroll {
              animation: scroll 25s linear infinite;
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default aboutPage