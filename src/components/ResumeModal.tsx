import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { profile } from '../data/portfolio';
import { EASE } from './fx';

/** Full-screen resume modal rendering the real PDF with download support. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 border-b border-white/10 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-xl tracking-wide text-bone sm:text-2xl">The Full Story · Resume</p>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={profile.resumePdf}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-2 text-xs font-semibold text-mist transition hover:bg-white/10 hover:text-bone"
          >
            Open in new tab ↗
          </a>
          <a
            href={profile.resumePdf}
            download="Shivanshu_Resume.pdf"
            data-cursor="play"
            className="flex items-center gap-1.5 rounded-md bg-bone px-3.5 py-2 text-xs font-bold text-ink transition hover:bg-white"
          >
            <span>⤓</span> Download PDF
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone transition hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>

      <motion.div
        className="gutter flex flex-1 overflow-hidden py-3 sm:py-5"
        data-lenis-prevent
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <div className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-xl bg-ink-2 shadow-2xl ring-1 ring-white/10">
          <iframe
            src={`${profile.resumePdf}#toolbar=1&navpanes=0`}
            title="Shivanshu Shukla Resume PDF"
            className="h-full w-full flex-1 border-0 bg-white"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
