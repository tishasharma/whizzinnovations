"use client";
import { useState } from "react";
import Link from "next/link";

export default function BootcampPopup() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      {/* The Pop-up Container (Using the Dark Mode / Tech Vibe) */}
      <div className="relative w-full max-w-md p-6 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute text-gray-400 top-3 right-3 hover:text-white"
        >
          ✕
        </button>

        {/* Content */}
        <h2 className="mb-2 text-xl font-bold text-white font-mono">
           > initialize_ai_bootcamp()
        </h2>
        <p className="mb-6 text-gray-300">
          Ready to build your first AI engine? Join the 2026 AI Bootcamp and master the fundamentals.
        </p>

        {/* The Action Button (Redirects to your new landing page) */}
        <Link href="/ai-bootcamp">
          <button className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]">
            Access the Roadmap
          </button>
        </Link>
        
      </div>
    </div>
  );
}
