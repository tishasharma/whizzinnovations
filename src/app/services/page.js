
function servicesPage() {
  return (
    <section id="services" className="bg-gray-50 text-purple-900 py-16 px-6">
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
  )
}

export default servicesPage