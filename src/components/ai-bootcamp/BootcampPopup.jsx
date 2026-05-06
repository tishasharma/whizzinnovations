"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  MonitorPlay,
  Phone,
  Rocket,
  ScanLine,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";

const toolChips = ["ChatGPT", "Gemini", "Claude", "Canva AI", "No-code sites"];

const popupStats = [
  { label: "16 hours", detail: "8 live sessions", icon: Clock3 },
  { label: "2 weeks", detail: "Starting 15 May", icon: CalendarDays },
  { label: "Hands-on", detail: "Project practice", icon: MonitorPlay },
  { label: "Small batch", detail: "Focused mentoring", icon: Users },
];

export default function BootcampPopup() {
  const pathname = usePathname();
  const closeButtonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/ai-bootcamp") return;

    const shouldPreviewPopup = new URLSearchParams(window.location.search).get("bootcampPopup") === "1";
    const wasDismissed = window.sessionStorage.getItem("aiBootcampPopupDismissed");
    if (wasDismissed && !shouldPreviewPopup) return;

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, shouldPreviewPopup ? 150 : 850);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  function closePopup() {
    window.sessionStorage.setItem("aiBootcampPopupDismissed", "true");
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-3 py-4 sm:px-6"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close AI Builders Bootcamp popup"
        onClick={closePopup}
        className="absolute inset-0 h-full w-full cursor-default bg-black/80 backdrop-blur-md"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="bootcamp-popup-title"
        aria-describedby="bootcamp-popup-description"
        className="relative max-h-[calc(100dvh-1.5rem)] w-full max-w-6xl overflow-hidden rounded-lg border border-cyan-200/20 bg-[#080511] text-white shadow-2xl shadow-purple-950/70 animate-[bootcamp-dialog-pop_450ms_ease-out_both]"
      >
        <span className="pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(115deg,transparent,rgba(103,232,249,0.16),transparent)] animate-[bootcamp-shine_3.2s_ease-in-out_infinite]" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/75 text-white transition hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="grid gap-0 lg:grid-cols-[1fr_0.92fr]">
          <div className="relative hidden overflow-hidden border-b border-white/10 bg-black lg:block lg:border-b-0 lg:border-r">
            <div className="relative aspect-[16/9] min-h-[230px] lg:aspect-auto lg:h-full lg:min-h-[560px]">
              <Image
                src="/images/ai-bootcamp/master-ai-wide.jpeg"
                alt="Master AI before others even start bootcamp poster"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/15 bg-black/72 p-4 backdrop-blur sm:right-auto sm:max-w-md">
              <p className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-3 py-1 text-xs font-black uppercase tracking-normal">
                <Rocket className="h-4 w-4" aria-hidden="true" />
                Limited seats only
              </p>
              <h2 className="mt-3 text-3xl font-black leading-none sm:text-4xl">
                Master AI before others even start
              </h2>
              <p className="mt-3 text-sm leading-6 text-purple-100">
                Open for all. 100% hands-on. Certificate included.
              </p>
            </div>
          </div>

          <div className="relative px-4 py-5 sm:px-8 sm:py-8 lg:py-10">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-sm font-black uppercase tracking-normal text-cyan-100 animate-[bootcamp-soft-bounce_1.8s_ease-in-out_infinite] motion-reduce:animate-none">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Upcoming AI Builders Bootcamp
            </p>

            <div className="grid grid-cols-[1fr_86px] items-start gap-3 sm:grid-cols-[1fr_118px]">
              <div>
                <h2 id="bootcamp-popup-title" className="text-3xl font-black leading-none text-white sm:text-5xl">
                  Hurry up. Registrations are open now.
                </h2>

                <p id="bootcamp-popup-description" className="mt-3 max-w-xl text-sm leading-6 text-purple-100 sm:mt-4 sm:text-base sm:leading-7">
                  A 16-hour, 2-week live program with 8 practical sessions on AI
                  literacy, prompt skills, Canva AI, no-code websites,
                  responsible AI, and real project building.
                </p>
              </div>

              <div className="relative mt-3 aspect-[4/5] overflow-hidden rounded-lg border border-white/15 bg-black shadow-lg shadow-purple-900/35 sm:mt-1">
                <Image
                  src="/images/ai-bootcamp/master-ai-square.jpeg"
                  alt="AI bootcamp robot assistant"
                  fill
                  className="object-cover object-[74%_58%]"
                />
              </div>
            </div>

            <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
              {toolChips.map((chip, index) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white animate-[bootcamp-float_3s_ease-in-out_infinite] motion-reduce:animate-none"
                  style={{ animationDelay: `${index * 140}ms` }}
                >
                  <CheckCircle2 className="h-4 w-4 text-lime-300" aria-hidden="true" />
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
              {popupStats.map(({ label, detail, icon: Icon }) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/5 p-3 sm:p-4">
                  <Icon className="mb-2 h-5 w-5 text-cyan-200 sm:mb-3" aria-hidden="true" />
                  <p className="text-base font-black sm:text-lg">{label}</p>
                  <p className="text-sm text-purple-100">{detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 hidden rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4 sm:block">
              <div className="flex items-start gap-3">
                <ScanLine className="mt-1 h-6 w-6 flex-none text-cyan-200" aria-hidden="true" />
                <p className="text-sm leading-6 text-cyan-50">
                  Students learn to question AI outputs, spot misinformation,
                  understand limitations and bias, use AI for genuine academic
                  productivity, and build a real AI-driven project.
                </p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:gap-3">
              <Link
                href="/ai-bootcamp"
                onClick={closePopup}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 font-black text-white shadow-lg shadow-purple-900/40 transition hover:bg-purple-500 sm:min-h-12"
              >
                View full program
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+917011286545"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-black text-white transition hover:bg-white/10 sm:min-h-12"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call 7011286545
              </a>
            </div>

            <p className="mt-3 text-sm text-purple-200 sm:mt-4">
              Registration fee: Rs.100, fully refundable.
            </p>

            <div className="pointer-events-none absolute right-8 top-8 hidden text-purple-200/30 lg:block">
              <ScanLine className="h-10 w-10 animate-[bootcamp-float_2.8s_ease-in-out_infinite] motion-reduce:animate-none" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
