"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MonitorPlay,
  Phone,
  ScanLine,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const popupStats = [
  { label: "16 hours", detail: "Live guided learning", icon: Clock3 },
  { label: "2 weeks", detail: "Online cohort", icon: MonitorPlay },
  { label: "1st Batch", detail: "Begins on 8 May", icon: CalendarDays },
  { label: "2nd Batch", detail: "Begins on 17 May", icon: Users },
];

export default function BootcampPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldPreviewPopup = new URLSearchParams(window.location.search).get("bootcampPopup") === "1";

    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, shouldPreviewPopup ? 150 : 850);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isVisible]);

  function closePopup() {
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <aside
      className="fixed bottom-4 right-4 z-[60] w-[calc(100%-2rem)] max-w-[340px] sm:bottom-6 sm:right-6"
      role="presentation"
    >
      <section
        role="dialog"
        aria-modal="false"
        aria-labelledby="bootcamp-popup-title"
        aria-describedby="bootcamp-popup-description"
        className="relative overflow-hidden rounded-lg border border-purple-200 bg-white text-gray-950 shadow-2xl shadow-purple-950/20 animate-[bootcamp-corner-pop_420ms_ease-out_both]"
      >
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-700 via-fuchsia-500 to-purple-700" />

        <button
          type="button"
          onClick={closePopup}
          aria-label="Close popup"
          className="absolute right-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-purple-200 bg-white/90 text-purple-900 shadow-sm transition hover:border-purple-500 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>

        <div className="p-4 sm:p-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-black uppercase tracking-normal text-purple-900">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            New AI Bootcamp
          </p>

          <h2 id="bootcamp-popup-title" className="mt-3 pr-8 text-xl font-black leading-tight text-purple-950 sm:text-2xl">
            AI Builders Bootcamp registrations are open
          </h2>

          <p id="bootcamp-popup-description" className="mt-2 text-sm leading-6 text-gray-700">
            Learn AI tools, prompt skills, Canva AI, no-code websites, and
            project building in live sessions.
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {popupStats.map(({ label, detail, icon: Icon }) => (
              <div key={label} className="rounded-lg border border-purple-100 bg-purple-50 p-2.5">
                <Icon className="mb-1.5 h-4 w-4 text-purple-800" aria-hidden="true" />
                <p className="text-sm font-black text-purple-950">{label}</p>
                <p className="text-xs font-semibold text-purple-700">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[74px_1fr] items-center gap-3 rounded-lg border border-purple-200 bg-white p-2.5 shadow-sm">
            <div className="relative aspect-[13/17] overflow-hidden rounded-md bg-white shadow-[0_0_0_1px_rgba(88,28,135,0.16)]">
              <Image
                src="/images/ai-bootcamp/ai-builders-qr.png"
                alt="AI Builders Bootcamp registration QR scanner"
                width={130}
                height={170}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-2 right-2 h-[3px] animate-[bootcamp-qr-scan-tight_1.6s_linear_infinite] bg-gradient-to-r from-transparent via-purple-600 to-transparent shadow-[0_0_12px_rgba(147,51,234,0.85)] motion-reduce:animate-none" />
            </div>

            <div>
              <p className="flex items-center gap-2 text-sm font-black uppercase tracking-normal text-purple-900">
                <ScanLine className="h-4 w-4" aria-hidden="true" />
                Scan here
              </p>
              <p className="mt-1 text-sm leading-5 text-gray-700">
                Batch 1 begins on 8 May. Batch 2 begins on 17 May.
              </p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Link
              href="/ai-bootcamp"
              onClick={closePopup}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-purple-800 px-4 py-2.5 text-sm font-black text-white shadow-lg shadow-purple-900/20 transition hover:bg-purple-700"
            >
              View program
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="tel:+917011286545"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-purple-200 px-4 py-2.5 text-sm font-black text-purple-900 transition hover:bg-purple-50"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              7011286545
            </a>
          </div>
        </div>
      </section>
    </aside>
  );
}
