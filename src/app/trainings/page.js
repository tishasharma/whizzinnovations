import Link from "next/link";

export default function Trainings() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resource & Training Hub
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Elevate your career with industry-recognized expertise. Welcome to our Resource & Training Hub, 
            where we transform professionals into architects, engineers, and masters of the modern tech stack.
          </p>
        </div>

        {/* Advanced Systems & Infrastructure */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              🚀 Advanced Systems & Infrastructure
            </h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Own the server. Secure the perimeter. Scale the enterprise.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Linux Administration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Move beyond the terminal. Master high-level kernel tuning, advanced automation with Bash, 
                  and the art of system hardening. If you want to run the backends of the world's largest companies, start here.
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Windows Enterprise Administration</h3>
                <p className="text-gray-700 leading-relaxed">
                  It's more than just servers; it's about infrastructure orchestration. Master Active Directory Forest design, 
                  massive-scale PowerShell automation, and seamless Hybrid-Cloud integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI & Software Engineering */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              🧠 AI & Software Engineering
            </h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              Code the future. Build intelligence.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Python: Advanced AI & Machine Learning</h3>
                <p className="text-gray-700 leading-relaxed">
                  Stop only using models and start building them. From Deep Learning with PyTorch to fine-tuning 
                  Large Language Models (LLMs), this course is your ticket to the forefront of the AI revolution.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">The Java Architect Masterclass</h3>
                <p className="text-gray-700 leading-relaxed">
                  Java isn't just a language; it's the backbone of global finance and commerce. Master JVM performance tuning, 
                  high-concurrency threading, and enterprise design patterns that never fail.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Frontend Titans: React & Angular</h3>
                <p className="text-gray-700 leading-relaxed">
                  Choose your weapon. Whether it's the flexible, hook-driven world of React or the robust, structured 
                  ecosystem of Angular, we'll teach you to build high-performance UIs that users love.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Full-Stack Mastery: JavaScript & Spring Boot</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn to bridge the gap between a lightning-fast JS frontend and a rock-solid Spring Boot backend. 
                  Build complete, production-ready microservices from scratch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data & Database Power */}
        <section className="mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              💎 Data & Database Power
            </h2>
            <p className="text-lg text-gray-600 mb-8 italic">
              The gold of the 21st century is data. Learn how to mine it.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Oracle DBA: The Expert Track</h3>
                <p className="text-gray-700 leading-relaxed">
                  Go deep into the world's most powerful database. From Oracle RAC (Real Application Clusters) to 
                  high-stakes RMAN recovery, become the DBA that companies rely on when downtime is not an option.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">⚡ 4-Week Intensive: Data Analytics & FinOps</h3>
                <p className="text-xl text-gray-800 font-semibold mb-3">Where Data Science Meets Financial Strategy</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In today's world, it's not enough to just analyze data—you have to do it cost-effectively. 
                  This 4-week sprint is designed to turn you into a "Cloud-Smart" Analyst who knows how to drive 
                  insights without blowing the budget.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  <li>Visual Storytelling & Advanced SQL</li>
                  <li>Predictive Modeling & Business Intelligence</li>
                  <li>The FinOps Framework (Cloud Cost Management)</li>
                  <li>The "Unit Economics" of Data—Optimizing for ROI</li>
                </ul>
                <Link 
                  href="https://docs.google.com/document/d/1vDrbKRObSQcN9NDXj4IouB5vLAwNdDIYl9Ijm8XjOlw/edit?tab=t.0#heading=h.ded5nta3xgkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-8 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105 shadow-lg"
                >
                  🔥 Access the Data Analytics & FinOps Training Guide
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}