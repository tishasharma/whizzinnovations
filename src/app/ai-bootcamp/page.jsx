import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  Gauge,
  GraduationCap,
  Layers3,
  Laptop,
  Lightbulb,
  MessageSquareText,
  Phone,
  Rocket,
  ScanLine,
  Sparkles,
  Star,
  Target,
  WandSparkles,
  Workflow,
} from "lucide-react";

export const metadata = {
  title: "AI Builders Bootcamp | Whizz Dream Big",
  description:
    "Join the awaited upcoming AI Builders Bootcamp by Whizz Dream Innovations and Training Basket. Learn practical AI, prompt skills, content creation, vibe coding, and project building in live online sessions.",
};

const highlights = [
  { value: "16 hrs", label: "Live guided learning", icon: Clock3 },
  { value: "2 weeks", label: "Online cohort", icon: CalendarDays },
  { value: "8 May", label: "1st batch begins", icon: Rocket },
  { value: "17 May", label: "2nd batch begins", icon: Rocket },
];

const programFacts = [
  { label: "Total sessions", value: "8 live sessions" },
  { label: "Session length", value: "2 hours each" },
  { label: "Batch size", value: "25-35 learners" },
  { label: "Method", value: "Mentorship-driven" },
];

const outcomes = [
  "Use AI tools confidently for daily work, study, content, and business tasks.",
  "Write better prompts for research, planning, design, writing, and automation.",
  "Build practical workflows that combine multiple AI tools instead of using only one app.",
  "Create ready-to-use outputs like posts, documents, ideas, landing pages, and task systems.",
  "Understand where AI helps, where it fails, and how to check results before using them.",
  "Complete mini projects that prove you can build with AI, not just talk about it.",
];

const modules = [
  {
    title: "AI Foundations",
    eyebrow: "Day 1-2",
    copy: "Understand how modern AI works, how prompts become outputs, and how to think clearly with AI tools.",
    icon: BrainCircuit,
  },
  {
    title: "Prompt Engineering",
    eyebrow: "Day 3-4",
    copy: "Learn prompt structures for better answers, role prompts, step-by-step reasoning, refinement, and reusable templates.",
    icon: MessageSquareText,
  },
  {
    title: "Content Creation",
    eyebrow: "Day 5-6",
    copy: "Plan, write, design, summarize, and repurpose content for social media, study notes, emails, and presentations.",
    icon: FileText,
  },
  {
    title: "AI Workflows",
    eyebrow: "Day 7-8",
    copy: "Connect tools, build repeatable systems, automate small tasks, and turn messy work into clear processes.",
    icon: Workflow,
  },
  {
    title: "Vibe Coding",
    eyebrow: "Bonus +2 hrs",
    copy: "Use AI to build webpages, simple apps, calculators, and prototypes even if you are still new to coding.",
    icon: Code2,
  },
  {
    title: "No-code Websites",
    eyebrow: "Build faster",
    copy: "Turn ideas into landing pages and no-code web experiences with AI-guided planning, copy, and structure.",
    icon: WandSparkles,
  },
  {
    title: "Responsible AI",
    eyebrow: "Think clearly",
    copy: "Detect deepfakes, check accuracy, understand bias, and use AI with academic integrity and control.",
    icon: Target,
  },
  {
    title: "Build Projects",
    eyebrow: "Final sessions",
    copy: "Create practical projects like AI study assistants, business content kits, portfolio pages, and workflow dashboards.",
    icon: Laptop,
  },
];

const projects = [
  "Personal AI study planner",
  "Business content idea machine",
  "Prompt library for daily work",
  "Simple AI-powered webpage",
  "Automation checklist system",
  "Mini portfolio project",
];

const learnerTypes = [
  "Students who want career-ready AI confidence",
  "Working professionals who want faster output",
  "Creators who want content systems",
  "Entrepreneurs who want practical automation",
];

const responsibleSkills = [
  "Identify fake and AI-generated content",
  "Understand AI limitations and bias",
  "Use AI for genuine academic productivity",
  "Practice cyber safety and responsible digital behaviour",
  "Question outputs instead of accepting them blindly",
];

const schoolGains = [
  "Creativity and confidence for students",
  "Future-ready technology skills",
  "Real project portfolio",
  "Innovation positioning for schools",
  "Strong parent appeal",
  "Student certifications",
];

const previousProgramReviews = [
  {
    title: "Certified Java Bootcamp",
    source: "Indian Air Force training delivery",
    copy: "Participants appreciated the structured hands-on approach and the way complex technical topics were converted into clear practice sessions.",
  },
  {
    title: "Cyber Safety Awareness",
    source: "Khaitan Global School, classes 8-9",
    copy: "The session helped students connect digital safety with real classroom behaviour, responsible choices, and practical online awareness.",
  },
  {
    title: "Corporate Training Experience",
    source: "Yamaha Motors, M-Tech, eClerx, ChainSys",
    copy: "Previous programs were valued for practical delivery, professional mentoring, and outcomes that teams could apply beyond the classroom.",
  },
];

export default function AIBootcampPage() {
  return (
    <main className="bg-white text-purple-950">
      <section className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-purple-100 to-white" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_430px]">
          <div className="max-w-4xl py-8 bootcamp-motion-safe animate-[bootcamp-fade-up_700ms_ease-out_both]">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-sm font-black uppercase tracking-normal text-purple-900">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Our awaited upcoming program is about to start
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 text-sm font-bold text-purple-800 shadow-sm">
                Live online cohort
              </span>
            </div>

            <h1 className="max-w-[11ch] text-5xl font-black leading-none text-purple-950 sm:text-7xl lg:text-8xl">
              AI Builders Bootcamp
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-semibold leading-9 text-purple-900">
              Learn by building with AI. Stop only consuming tools and start
              creating prompts, content systems, workflows, and real projects.
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-purple-800">
              This course is made for learners who want practical confidence:
              how AI works, how to get useful results, how to build faster, and
              how to turn ideas into output with guided live sessions.
            </p>

            <div className="mt-8 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4">
              {highlights.map(({ value, label, icon: Icon }) => (
                <div key={label} className="rounded-lg border border-purple-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md">
                  <Icon className="mb-3 h-5 w-5 text-purple-800" aria-hidden="true" />
                  <p className="text-2xl font-black">{value}</p>
                  <p className="text-sm text-purple-700">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917011286545"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-purple-800 px-6 py-3 font-black text-white transition hover:bg-purple-700"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call to register
              </a>
              <Link
                href="#course-roadmap"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-purple-200 bg-white px-6 py-3 font-bold text-purple-900 transition hover:bg-purple-50"
              >
                Explore course roadmap
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[430px] bootcamp-motion-safe animate-[bootcamp-fade-up_760ms_ease-out_120ms_both]">
            <div className="absolute -inset-4 rounded-lg bg-purple-200 blur-2xl" />
            <div className="relative overflow-hidden rounded-lg border border-purple-200 bg-white shadow-2xl shadow-purple-200/70">
              <Image
                src="/images/ai-bootcamp/master-ai-wide.jpeg"
                alt="Master AI before others even start"
                width={1280}
                height={720}
                priority
                className="h-auto w-full"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-purple-100 bg-white/90 p-4 text-purple-950 shadow-sm backdrop-blur">
                <p className="text-sm font-black uppercase tracking-normal text-purple-700">
                  Program highlight
                </p>
                <p className="mt-2 text-xl font-black">ChatGPT, Gemini, Claude, Canva AI and no-code websites</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md">
            <GraduationCap className="mb-4 h-8 w-8 text-purple-800" aria-hidden="true" />
            <h2 className="text-2xl font-black">Beginner friendly</h2>
            <p className="mt-3 leading-7 text-purple-800">
              No advanced technical background required. We start from clear AI
              basics and move toward useful building.
            </p>
          </div>
          <div className="rounded-lg border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md">
            <Target className="mb-4 h-8 w-8 text-purple-800" aria-hidden="true" />
            <h2 className="text-2xl font-black">Output focused</h2>
            <p className="mt-3 leading-7 text-purple-800">
              Every session connects to something you can create, improve, or
              reuse after the class.
            </p>
          </div>
          <div className="rounded-lg border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md">
            <Gauge className="mb-4 h-8 w-8 text-purple-800" aria-hidden="true" />
            <h2 className="text-2xl font-black">Fast and practical</h2>
            <p className="mt-3 leading-7 text-purple-800">
              A compact 2-week format built for momentum, practice, and visible
              progress.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-7 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-normal text-purple-700">
                Open for all. 100% hands-on. Certificate included.
              </p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                The program is built to make learners active creators
              </h2>
            </div>
            <p className="text-lg leading-8 text-purple-800">
              The course covers ChatGPT, Gemini, Claude, Canva AI, no-code
              websites, prompt thinking, and project practice so learners can
              move from passive usage to active creation.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {programFacts.map((fact) => (
              <div key={fact.label} className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                <p className="text-sm text-purple-700">{fact.label}</p>
                <p className="mt-1 text-xl font-black text-purple-950">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="course-roadmap" className="bg-purple-50 px-5 py-16 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.65fr_1fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-normal text-purple-800">
                <Layers3 className="h-4 w-4" aria-hidden="true" />
                Course roadmap
              </p>
              <h2 className="text-4xl font-black leading-tight text-purple-950 sm:text-5xl">
                Everything learners need to start building with AI
              </h2>
              <p className="mt-5 text-lg leading-8 text-purple-800">
                The bootcamp is structured like a practical journey: understand
                AI, write better prompts, create useful content, connect tools,
                and finish with projects that make the learning visible.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {modules.map(({ title, eyebrow, copy, icon: Icon }) => (
                <article key={title} className="rounded-lg border border-purple-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <Icon className="h-7 w-7 text-purple-800" aria-hidden="true" />
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-black uppercase tracking-normal text-purple-900">
                      {eyebrow}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-purple-950">{title}</h3>
                  <p className="mt-2 leading-7 text-purple-800">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-purple-100 bg-purple-50 shadow-sm">
            <Image
              src="/images/ai-bootcamp/school-ready-value.jpeg"
              alt="Future-ready student AI bootcamp for schools"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-purple-700">
              Responsible AI matters
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              We teach learners to use AI with clarity, confidence, and control
            </h2>
            <p className="mt-5 text-lg leading-8 text-purple-800">
              The proposal focuses on more than shortcuts. Learners practice
              critical thinking, responsible usage, academic integrity, and real
              project creation.
            </p>
            <div className="mt-7 grid gap-3">
              {responsibleSkills.map((skill) => (
                <div key={skill} className="flex gap-3 rounded-lg border border-purple-100 bg-purple-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-purple-800" aria-hidden="true" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 px-5 py-16 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.85fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-purple-800">
              What you will be able to do
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Build useful outputs, not only notes
            </h2>
            <p className="mt-5 text-lg leading-8 text-purple-800">
              By the end, you should be able to use AI for better thinking,
              faster work, cleaner content, and practical mini builds.
            </p>
          </div>

          <ul className="grid gap-3">
            {outcomes.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-purple-100 bg-white p-4 text-purple-900 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-purple-700" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-purple-800">
              What students and schools gain
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Real value. Visible impact.
            </h2>
            <p className="mt-5 text-lg leading-8 text-purple-800">
              The school-focused program builds AI-literate thinkers and gives
              institutions a practical innovation story parents can understand.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {schoolGains.map((gain) => (
              <div key={gain} className="rounded-lg border border-purple-100 bg-purple-50 p-5">
                <CheckCircle2 className="mb-4 h-6 w-6 text-purple-800" aria-hidden="true" />
                <p className="font-bold text-purple-950">{gain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-50 px-5 py-16 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[0.75fr_1fr]">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-normal text-purple-800">
                Reviews from previous programs
              </p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Trusted training experience behind this bootcamp
              </h2>
            </div>
            <p className="text-lg leading-8 text-purple-800">
              Whizz Dream Big has delivered school, corporate, and certified
              training programs before. These highlights show the kind of
              practical, guided learning approach we are bringing to AI Builders.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {previousProgramReviews.map((review) => (
              <article key={review.title} className="rounded-lg border border-purple-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-md">
                <div className="mb-5 flex gap-1 text-purple-700" aria-label="Five star review">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <h3 className="text-2xl font-black text-purple-950">{review.title}</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-normal text-purple-800">
                  {review.source}
                </p>
                <p className="mt-4 leading-7 text-purple-800">{review.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-black uppercase tracking-normal text-purple-800">
                <Bot className="h-4 w-4" aria-hidden="true" />
                Project practice
              </p>
              <h2 className="text-4xl font-black leading-tight sm:text-5xl">
                Mini projects you can show, reuse, and improve
              </h2>
            </div>
            <p className="text-lg leading-8 text-purple-800">
              The program is designed so learners leave with real artifacts.
              These projects help you understand how to turn a blank idea into a
              working output with AI support.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project} className="rounded-lg border border-purple-100 bg-purple-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:bg-white">
                <Rocket className="mb-4 h-6 w-6 text-purple-800" aria-hidden="true" />
                <h3 className="text-xl font-black">{project}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-50 px-5 py-16 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-normal text-purple-800">
              Who should join
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl">
              Made for ambitious learners who want AI confidence now
            </h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {learnerTypes.map((item) => (
                <div key={item} className="rounded-lg border border-purple-100 bg-white p-5 shadow-sm">
                  <Lightbulb className="mb-4 h-6 w-6 text-purple-800" aria-hidden="true" />
                  <p className="font-bold text-purple-950">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-purple-200 bg-white p-6 text-purple-950 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <Image
                src="/images/Logo.jpg"
                alt="Whizz Dream Innovation logo"
                width={72}
                height={72}
                className="h-16 w-16 rounded-full object-contain"
              />
              <Image
                src="/images/training_basket_logo.png"
                alt="Training Basket logo"
                width={190}
                height={40}
                className="h-auto w-40 object-contain"
              />
            </div>
            <h3 className="mt-7 text-3xl font-black">Program details</h3>
            <div className="mt-5 grid gap-4">
              <p className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                <strong>Format:</strong> Online live sessions
              </p>
              <p className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                <strong>Duration:</strong> 16 hours across 2 weeks
              </p>
              <p className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                <strong>Bonus:</strong> Vibe coding session for apps and webpages
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="register" className="bg-white px-5 py-14 text-purple-950 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-8 rounded-lg border border-purple-200 bg-purple-50 p-6 sm:p-8 lg:grid-cols-[1fr_320px] bootcamp-motion-safe animate-[bootcamp-fade-up_720ms_ease-out_both]">
          <div>
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-black uppercase tracking-normal text-purple-800">
              <ScanLine className="h-4 w-4" aria-hidden="true" />
              Scan here to register
            </p>
            <h2 className="text-3xl font-black">Registrations are open now</h2>
            <p className="mt-3 max-w-3xl leading-7 text-purple-800">
              1st batch begins on 8 May. 2nd batch begins on 17 May. Scan the
              QR code to reserve your seat, or call the Whizz Dream team
              directly for quick registration support.
            </p>
            <a
              href="tel:+917011286545"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-purple-800 px-6 py-3 font-black text-white transition hover:bg-purple-700"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              7011286545
            </a>
          </div>

          <div className="mx-auto w-full max-w-[250px]">
            <div className="rounded-lg border border-purple-200 bg-white p-3 text-purple-950 shadow-lg shadow-purple-200/60 bootcamp-motion-safe animate-[bootcamp-soft-glow_3.4s_ease-in-out_infinite]">
              <div className="relative aspect-square overflow-hidden rounded-md border border-purple-100 bg-white">
                <Image
                  src="/images/ai-bootcamp/ai-builders-qr.png"
                  alt="AI Builders Bootcamp QR registration scanner"
                  width={1522}
                  height={1488}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 right-2 h-[4px] animate-[bootcamp-qr-scan-tight_1.5s_linear_infinite] bg-gradient-to-r from-transparent via-purple-600 to-transparent shadow-[0_0_18px_rgba(147,51,234,0.85)] motion-reduce:animate-none" />
              </div>
              <p className="mt-3 text-center text-sm font-black uppercase tracking-normal text-purple-950">
                Scan QR to register
              </p>
            </div>
            <p className="mt-3 text-center text-sm font-bold text-purple-800">
              Scanner is highlighted above for faster registration
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
