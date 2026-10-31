import { motion } from 'framer-motion';
import { certifications, profile, projects } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — real resume PDF preview plus fullscreen view & download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="The screenplay" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <div className="relative flex h-[620px] w-full flex-col overflow-hidden rounded-2xl bg-ink-2 shadow-2xl ring-1 ring-white/10 sm:h-[750px]">
            <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-2.5 text-xs text-smoke">
              <span className="font-mono">Shivanshu_Resume.pdf</span>
              <div className="flex items-center gap-3">
                <a
                  href={profile.resumePdf}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-crimson-2 hover:underline"
                >
                  Open in new tab ↗
                </a>
                <button
                  type="button"
                  onClick={onView}
                  className="text-xs font-semibold text-bone hover:underline"
                >
                  Expand ⛶
                </button>
              </div>
            </div>
            <iframe
              src={`${profile.resumePdf}#toolbar=0&navpanes=0`}
              title="Shivanshu Shukla Resume PDF"
              className="h-full w-full flex-1 border-0 bg-white"
            />
          </div>
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">Every episode, on one page.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Education, background, projects, and milestones — view the official resume or download a copy.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white"
              >
                ▶ View Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Shivanshu_Resume.pdf"
                data-cursor="play"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-md px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                <span>⤓</span> Download Resume PDF
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: '2nd Year', k: 'Degree' },
              { v: String(projects.length), k: 'Originals' },
              { v: String(certifications.length), k: 'Milestones' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-3xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}
