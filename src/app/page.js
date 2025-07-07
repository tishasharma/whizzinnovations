import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <>
    {/* <!-- Header --> */}
  <header className="bg-white text-purple-900 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <img src="\images\Logo.jpg" alt="Whizz Dream innovation" className="h-16 w-16 object-contain" />
        <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">Whizz Dream Innovation</h1>
      </div>
      <nav className="space-x-4 text-center sm:text-right">
        <a href="#" className="hover:text-blue-700">Home</a>
        <a href="#services" className="hover:text-blue-700">Services</a>
        <a href="#about" className="hover:text-blue-700">About</a>
        <a href="#contact" className="hover:text-blue-700">Contact</a>
      </nav>
    </div>
  </header>

  {/* <!-- Hero Section --> */}
  <section className="text-center py-20 px-4">
    <h2 className="text-4xl font-bold mb-4">Innovate. Implement. Inspire.</h2>
    <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">Empowering enterprises through IT solutions, consultancy, AI, software & hardware services, and digital education – locally and globally.</p>
    <a href="#contact" className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">Let’s Connect</a>
  </section>

  {/* <!-- Services Section --> */}
  <section id="services" className="bg-white text-purple-900 py-16 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-10">Our Services</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="p-6 bg-purple-50 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">IT Consultancy</h4>
          <p>Expert advisory in IT strategy, system design, and global tech implementation.</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">Software Development</h4>
          <p>Custom software, web solutions, ERP systems, and e-commerce tools.</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">AI & Automation</h4>
          <p>Advanced solutions in artificial intelligence, NLP, and process automation.</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">Hardware & Networking</h4>
          <p>Sales, service, integration and support of computer systems and networks.</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">Education & Training</h4>
          <p>Courses in IT, AI, Vedic computing, and rural computer literacy programs.</p>
        </div>
        <div className="p-6 bg-purple-50 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">R&D and Consultancy</h4>
          <p>Research, seminars, and end-to-end technology consultancy for future readiness.</p>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- About Section --> */}
  <section id="about" className="py-20 px-6 text-white">
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">About Us</h3>
      <p className="text-lg leading-relaxed text-white/80">Whizz Dream Big is dedicated to technological excellence and global impact. From high-end consulting to grassroots education, our mission is to bridge innovation with accessibility through solutions in AI, IT services, software, and hardware. We aim to empower businesses and individuals to dream big — and build bigger.</p>
    </div>
  </section>

  {/* <!-- Contact Section --> */}
  <section id="contact" className="bg-white text-purple-900 py-16 px-6">
    <div className="max-w-2xl mx-auto text-center">
      <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
      <form action="https://sheetdb.io/api/v1/dl02fu9pqrnl0" method="post" id="contact-form" className="space-y-4">
        <input type="text" name="data[NAME]" id="name" placeholder="Name" required className="w-full px-4 py-2 border border-purple-300 rounded-lg" />
        <input type="email" name="data[EMAIL]" id="email" placeholder="Email" required className="w-full px-4 py-2 border border-purple-300 rounded-lg" />
        <textarea name="data[MESSAGE]" id="message" placeholder="Message" required className="w-full px-4 py-2 border border-purple-300 rounded-lg"></textarea>
        <button type="submit" className="bg-purple-900 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition">Send Message</button>
        <p id="response" className="text-sm mt-2"></p>
      </form>
    </div>
  </section>

  {/* <!-- Footer --> */}
  <footer className="bg-[#53197d] text-white text-center py-6">
    <div className="py-5 px-10 flex items-center justify-between">
      <img src="/images/Logo.jpg" className="h-25 w-35" />
      <div className="flex gap-5">
        <a href="#" className="text-gray-100 hover:text-gray-400 underline">Home</a>
        <a href="#services" className="text-gray-100 hover:text-gray-400 underline">Services</a>
        <a href="#about" className="text-gray-100 hover:text-gray-400 underline">About</a>
        <a href="#contact" className="text-gray-100 hover:text-gray-400 underline">Contact</a>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <a href="#"><FontAwesomeIcon icon={faInstagram} className="h-8 hover:text-gray-400" /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebook} className="h-8 hover:text-gray-400" /></a>
        <a href="#"><FontAwesomeIcon icon={faXTwitter} className="h-8 hover:text-gray-400" /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} className="h-8 hover:text-gray-400" /></a>
      </div>
    </div>
    <div>
      &copy; 2025 Whizz Dream Big. All rights reserved.
    </div>
  </footer>
    </>
  );
}
