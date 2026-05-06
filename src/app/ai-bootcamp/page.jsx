import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeIndianRupee,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  Lightbulb,
  MessageSquareText,
  Phone,
  ScanLine,
  Sparkles,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "AI Builders Bootcamp | Whizz Dream Big",
  description:
    "Join the AI Builders Bootcamp by Whizz Dream Innovations and Training Basket. Learn practical AI, prompt skills, content creation, and project building in live online sessions.",
};

const outcomes = [
  "Practical AI skills you can use immediately",
  "Confidence using multiple AI tools together",
  "Ready-to-use outputs for work, study, and business",
  "Faster content creation, research, and automation",
  "Daily AI confidence through guided practice",
];

const modules = [
  {
    title: "AI Basics",
    copy: "Understand how AI actually works and where it fits in real tasks.",
    icon: BrainCircuit,
  },
  {
    title: "Prompt Skills",
    copy: "Learn how to ask better questions and get powerful results from AI.",
    icon: MessageSquareText,
  },
  {
    title: "Create Content",
    copy: "Write, design, plan, and automate content with modern AI tools.",
    icon: FileText,
  },
  {
    title: "Build Projects",
    copy: "Create practical workflows, tools, and simple systems from scratch.",
    icon: Workflow,
  },
  {
    title: "Vibe Coding",
    copy: "Bonus session for building apps and webpages with AI support.",
    icon: Code2,
  },
  {
    title: "Tool Confidence",
    copy: "Use AI tools together instead of relying on just one platform.",
    icon: Lightbulb,
  },
];

export default function AIBootcampPage() {
  return (
    <main className="bg-[#07070b] text-white">
      <section className="relative overflow-hidden px-5 py-12 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(168,85,247,0.28),transparent_34rem),radial-gradient(circle_at_82%_12%,rgba(34,211,238,0.2),transparent_28rem)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.82fr]">
          <div className="py-4">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase tracking-normal text-cyan-100">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Upcoming live online bootcamp
            </p>
            <h1 className="max-w-[10ch] text-5xl font-black leading-none text-white sm:text-6xl lg:text-7xl">
              AI Builders Bootcamp
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-purple-100">
              Learn by building with AI. This 2-week bootcamp helps students,
              professionals, and creators move from AI curiosity to practical
              AI confidence through live sessions and hands-on project work.
            </p>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <Clock3 className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
                <p className="text-2xl font-black">16 hrs</p>
                <p className="text-sm text-purple-100">Live learning</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <CalendarDays className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
                <p className="text-2xl font-black">2 weeks</p>
                <p className="text-sm text-purple-100">Online sessions</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                <BadgeIndianRupee className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
                <p className="text-2xl font-black">Rs.100</p>
                <p className="text-sm text-purple-100">Fully refundable</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917011286545"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-bold text-white shadow-lg shadow-purple-950/50 transition hover:bg-purple-500"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call to register
              </a>
              <Link
                href="#scan"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-bold text-white transition hover:bg-white/10"
              >
                Scan QR code
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div id="scan" className="relative mx-auto w-full max-w-[420px] scroll-mt-28">
            <div className="absolute -inset-3 rounded-lg bg-cyan-300/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-white/15 bg-black shadow-2xl shadow-purple-950/50">
              <Image
                src="/images/ai-bootcamp/ai-builders-bootcamp.png"
                alt="AI Builders Bootcamp registration poster"
                width={676}
                height={1052}
                priority
                className="h-auto w-full"
              />
              <div className="absolute bottom-[2.4%] right-[2.4%] aspect-square w-[22.7%] overflow-hidden rounded-md border-2 border-cyan-300 shadow-[0_0_26px_rgba(103,232,249,0.95)]">
                <span className="absolute inset-0 rounded-md border border-white/70" />
                <span className="absolute left-0 right-0 top-0 h-[3px] animate-[bootcamp-qr-scan_1.75s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_16px_rgba(103,232,249,1)] motion-reduce:animate-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 text-gray-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-normal text-purple-800">
              What you will learn
            </p>
            <h2 className="text-3xl font-black text-gray-950 sm:text-4xl">
              Stop consuming AI. Start building with it.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              The bootcamp is designed around useful outcomes: better prompts,
              faster work, practical content, and small buildable projects that
              make AI feel less abstract.
            </p>
            <ul className="mt-6 grid gap-3">
              {outcomes.map((item) => (
                <li key={item} className="flex gap-3 text-gray-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-purple-700" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {modules.map(({ title, copy, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-gray-200 bg-gray-50 p-5 shadow-sm">
                <Icon className="mb-4 h-7 w-7 text-purple-800" aria-hidden="true" />
                <h3 className="text-xl font-black text-gray-950">{title}</h3>
                <p className="mt-2 leading-7 text-gray-700">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-white/10 bg-white/5 p-6 sm:p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-normal text-cyan-100">
              <ScanLine className="h-4 w-4" aria-hidden="true" />
              Limited seats only
            </p>
            <h2 className="text-3xl font-black">Registrations are open</h2>
            <p className="mt-3 max-w-3xl leading-7 text-purple-100">
              Batch starts 15 May. Scan the QR code on the poster or call the
              Whizz Dream team to reserve your seat.
            </p>
          </div>
          <a
            href="tel:+917011286545"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-6 py-3 font-black text-gray-950 transition hover:bg-cyan-200"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            7011286545
          </a>
        </div>
      </section>
    </main>
  );
}
