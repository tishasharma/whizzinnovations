"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Bot, Clock3, MonitorPlay, Phone, Rocket, ScanLine, Users, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BootcampPopup() {
  const pathname = usePathname();
  const closeButtonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/ai-bootcamp") return;

    const wasDismissed = window.sessionStorage.getItem("aiBootcampPopupDismissed");
    if (wasDismissed) return;

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 900);

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
        className="absolute inset-0 h-full w-full cursor-default bg-black/75 backdrop-blur-md"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="bootcamp-popup-title"
        aria-describedby="bootcamp-popup-description"
        className="relative grid max-h-[92vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-lg border border-white/15 bg-[#090811] text-white shadow-2xl shadow-purple-950/50 animate-[bootcamp-dialog-pop_450ms_ease-out_both] md:grid-cols-[0.88fr_1fr]"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:border-white/40 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="relative min-h-[360px] overflow-hidden bg-black md:min-h-full">
          <Image
            src="/images/ai-bootcamp/ai-builders-bootcamp.png"
            alt="AI Builders Bootcamp poster with registration QR scanner"
            width={676}
            height={1052}
            priority
            className="h-full w-full object-cover object-center md:object-contain"
          />

          <div className="absolute bottom-[2.4%] right-[2.4%] aspect-square w-[22.7%] overflow-hidden rounded-md border-2 border-cyan-300 shadow-[0_0_26px_rgba(103,232,249,0.95)]">
            <span className="absolute inset-0 rounded-md border border-white/70" />
            <span className="absolute left-0 right-0 top-0 h-[3px] animate-[bootcamp-qr-scan_1.75s_linear_infinite] bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_16px_rgba(103,232,249,1)] motion-reduce:animate-none" />
          </div>
        </div>

        <div className="relative overflow-hidden px-5 py-8 sm:px-8 md:py-10">
          <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border border-cyan-300/30 animate-[bootcamp-pulse-ring_2.8s_ease-out_infinite] motion-reduce:animate-none" />

          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-semibold uppercase tracking-normal text-cyan-100">
            <Rocket className="h-4 w-4" aria-hidden="true" />
            Awaited upcoming program
          </p>

          <h2 id="bootcamp-popup-title" className="max-w-[10ch] text-4xl font-black leading-none text-white sm:text-5xl">
            AI Builders Bootcamp is starting soon
          </h2>

          <p id="bootcamp-popup-description" className="mt-4 max-w-xl text-base leading-7 text-purple-100">
            A 2-week live online course to help learners build with AI:
            prompts, content systems, practical workflows, vibe coding, and
            real mini projects.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <Clock3 className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <p className="text-lg font-bold">16 Hours</p>
              <p className="text-sm text-purple-100">Across 2 weeks</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <MonitorPlay className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <p className="text-lg font-bold">Live Online</p>
              <p className="text-sm text-purple-100">Interactive sessions</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <Users className="mb-3 h-5 w-5 text-cyan-200" aria-hidden="true" />
              <p className="text-lg font-bold">Starting Soon</p>
              <p className="text-sm text-purple-100">Batch starts 15 May</p>
            </div>
          </div>

          <ul className="mt-6 grid gap-3 text-sm leading-6 text-purple-50 sm:text-base">
            <li className="border-l-2 border-cyan-300 pl-3">Upcoming program by Whizz Dream Innovation and Training Basket.</li>
            <li className="border-l-2 border-cyan-300 pl-3">AI basics: understand how AI actually works.</li>
            <li className="border-l-2 border-cyan-300 pl-3">Prompt skills: get better, ready-to-use outputs.</li>
            <li className="border-l-2 border-cyan-300 pl-3">Create content, automate tasks, and build project demos.</li>
          </ul>

          <div className="mt-5 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
            <div className="flex items-center gap-3">
              <Bot className="h-6 w-6 flex-none text-cyan-200" aria-hidden="true" />
              <p className="text-sm leading-6 text-cyan-50">
                Course focus: practical AI confidence for students,
                professionals, creators, and entrepreneurs.
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/ai-bootcamp"
              onClick={closePopup}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-purple-600 px-5 py-3 font-bold text-white shadow-lg shadow-purple-900/40 transition hover:bg-purple-500"
            >
              View bootcamp details
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href="tel:+917011286545"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 py-3 font-bold text-white transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call 7011286545
            </a>
          </div>

          <p className="mt-4 text-sm text-purple-200">
            Registration fee: Rs.100, fully refundable. Scan the QR on the poster to register.
          </p>
        </div>
      </section>
    </div>
  );
}
