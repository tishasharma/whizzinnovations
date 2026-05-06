"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Code2,
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
        className="relative grid max-h-[93vh] w-full max-w-6xl grid-cols-1 overflow-hidden rounded-lg border border-cyan-200/20 bg-[#07040d] text-white shadow-2xl shadow-purple-950/70 animate-[bootcamp-dialog-pop_450ms_ease-out_both] lg:grid-cols-[1.08fr_0.92fr]"
      >
        <span className="pointer-events-none absolute inset-0 rounded-lg bg-[linear-gradient(115deg,transparent,rgba(103,232,249,0.18),transparent)] animate-[bootcamp-shine_3.2s_ease-in-out_infinite]" />
        <span className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-cyan-300/35 animate-[bootcamp-pulse-ring_2.7s_ease-out_infinite] motion-reduce:animate-none" />
        <span className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-30 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/75 text-white transition hover:border-white/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative min-h-[280px] overflow-hidden bg-black sm:min-h-[360px] lg:min-h-[620px]">
          <Image
            src="/images/ai-bootcamp/master-ai-wide.jpeg"
            alt="Master AI before others even start bootcamp poster"
            width={1280}
            height={670}
            priority
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-black/10 lg:to-black/80" />

          <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/15 bg-black/70 p-4 backdrop-blur sm:max-w-md">
            <p className="inline-flex items-center gap-2 rounded-full bg-purple-500 px-3 py-1 text-xs font-black uppercase tracking-normal">
              <Rocket className="h-4 w-4" aria-hidden="true" />
              Limited seats only
            </p>
            <h2 className="mt-3 text-3xl font-black leading-none sm:text-4xl">
              Master AI before others even start
            </h2>
            <p className="mt-3 text-sm leading-6 text-purple-100">
              Open for all, 100% hands-on, certificate included, and focused on
              tools learners actually use.
            </p>
          </div>
        </div>

        <div className="relative max-h-[93vh] overflow-y-auto px-5 py-8 sm:px-8 lg:py-10">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-3 py-1 text-sm font-black uppercase tracking-normal text-cyan-100 animate-[bootcamp-soft-bounce_1.8s_ease-in-out_infinite] motion-reduce:animate-none">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Upcoming AI Builders Bootcamp
          </p>

          <h2 id="bootcamp-popup-title" className="text-4xl font-black leading-none text-white sm:text-5xl">
            Hurry up. Registrations are open now.
          </h2>

          <p id="bootcamp-popup-description" className="mt-4 max-w-xl text-base leading-7 text-purple-100">
            A 16-hour, 2-week live program with 8 practical sessions on AI
            literacy, prompt skills, Canva AI, no-code websites, responsible AI,
            and real project building.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {toolChips.map((chip, index) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-2 text-sm font-bold text-white animate-[bootcamp-float_3s_ease-in-out_infinite] motion-reduce:animate-none"
                style={{ animationDelay: `${index * 140}ms` }}
              >
                <CheckCircle2 className="h-4 w-4 text-lime-300" aria-hidden="true" />
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <Clock3 className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <p className="text-lg font-black">16 Hours</p>
              <p className="text-sm text-purple-100">8 live sessions</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <CalendarDays className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <p className="text-lg font-black">2 Weeks</p>
              <p className="text-sm text-purple-100">Starting 15 May</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <MonitorPlay className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <p className="text-lg font-black">100% Hands-on</p>
              <p className="text-sm text-purple-100">No boring lectures</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <Users className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <p className="text-lg font-black">Small Batch</p>
              <p className="text-sm text-purple-100">Focused mentoring</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_132px]">
            <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
              <div className="flex items-start gap-3">
                <Bot className="mt-1 h-6 w-6 flex-none text-cyan-200" aria-hidden="true" />
                <p className="text-sm leading-6 text-cyan-50">
                  Students learn to question AI outputs, spot misinformation,
                  understand limitations and bias, use AI for genuine academic
                  productivity, and build a real AI-driven project.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-32 overflow-hidden rounded-lg border border-cyan-200/30 bg-black">
              <Image
                src="/images/ai-bootcamp/ai-builders-bootcamp.png"
                alt="AI Builders Bootcamp QR poster"
                width={676}
                height={1052}
                className="h-auto w-full"
              />
              <div className="absolute bottom-[2.4%] right-[2.4%] aspect-square w-[22.7%] overflow-hidden rounded-[4px] border border-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.95)]">
                <span className="absolute left-0 right-0 top-0 h-[2px] animate-[bootcamp-qr-scan_1.45s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_12px_rgba(103,232,249,1)] motion-reduce:animate-none" />
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ai-bootcamp"
              onClick={closePopup}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 font-black text-white shadow-lg shadow-purple-900/40 transition hover:bg-purple-500"
            >
              View full program
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:+917011286545"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-black text-white transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call 7011286545
            </a>
          </div>

          <p className="mt-4 text-sm text-purple-200">
            Registration fee: Rs.100, fully refundable. Certificate included.
          </p>

          <div className="pointer-events-none absolute bottom-5 right-7 hidden text-cyan-200/40 lg:block">
            <Code2 className="h-14 w-14 animate-[bootcamp-float_3.4s_ease-in-out_infinite] motion-reduce:animate-none" aria-hidden="true" />
          </div>
          <div className="pointer-events-none absolute right-20 top-16 hidden text-purple-200/30 lg:block">
            <ScanLine className="h-10 w-10 animate-[bootcamp-float_2.8s_ease-in-out_infinite] motion-reduce:animate-none" aria-hidden="true" />
          </div>
        </div>
      </section>
    </div>
  );
}
