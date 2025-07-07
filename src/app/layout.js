import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Whizz Dream Big",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-white min-h-screen font-sans">
        <header className="bg-gray-100 text-purple-900 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <img src="\images\Logo.jpg" alt="Whizz Dream innovation" className="h-16 w-16 object-contain" />
              <h1 className="text-xl sm:text-2xl font-bold text-center sm:text-left">Whizz Dream Innovation</h1>
            </div>
            <nav className="space-x-4 text-center sm:text-right">
              <Link href="/" className="hover:text-blue-700">Home</Link>
              <Link href="/services" className="hover:text-blue-700">Services</Link>
              <Link href="/about" className="hover:text-blue-700">About</Link>
              <Link href="/contact" className="hover:text-blue-700">Contact</Link>
            </nav>
          </div>
        </header>
      
        {children}

        <footer className="text-center py-6 shadow-[-4px_-4px_10px_rgba(0,0,0,0.1)]">
          <div className="py-5 px-4 sm:px-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
            <img src="/images/Logo.jpg" className="h-16 w-16 sm:h-20 sm:w-35 object-contain" />
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 order-3 lg:order-2">
              <Link href="/" className="text-[#53197d] hover:text-blue-900 underline text-sm sm:text-base">Home</Link>
              <Link href="/services" className="text-[#53197d] hover:text-blue-900 underline text-sm sm:text-base">Services</Link>
              <Link href="/about" className="text-[#53197d] hover:text-blue-900 underline text-sm sm:text-base">About</Link>
              <Link href="/contact" className="text-[#53197d] hover:text-blue-900 underline text-sm sm:text-base">Contact</Link>
            </div>
            
            <div className="flex gap-3 sm:gap-4 order-2 lg:order-3">
              <Link href="/" className="transform hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faInstagram} className="h-6 sm:h-8 hover:text-blue-900 text-[#53197d]" />
              </Link>
              <Link href="/" className="transform hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faFacebook} className="h-6 sm:h-8 hover:text-blue-900 text-[#53197d]" />
              </Link>
              <Link href="/" className="transform hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faXTwitter} className="h-6 sm:h-8 hover:text-blue-900 text-[#53197d]" />
              </Link>
              <Link href="/" className="transform hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faLinkedin} className="h-6 sm:h-8 hover:text-blue-900 text-[#53197d]" />
              </Link>
            </div>
          </div>
          <div className="text-black">
            &copy; 2025 Whizz Dream Big. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  );
}
