import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-gray-50 text-black text-center py-20 px-4">
      <h2 className="bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent text-4xl font-bold mb-4">Innovate. Implement. Inspire.</h2>
      <p className="text-lg text-purple-900 max-w-xl mx-auto mb-8">Empowering enterprises through IT solutions, consultancy, AI, software & hardware services, and digital education – locally and globally.</p>
      <Link href="/contact" className="px-6 py-3 text-white bg-purple-900 font-semibold rounded-lg shadow-md hover:bg-purple-700 transition">Let’s Connect</Link>
    </section>
  );
}
