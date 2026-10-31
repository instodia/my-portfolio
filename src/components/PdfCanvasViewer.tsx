import { useEffect, useRef, useState } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorkerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

interface PdfCanvasViewerProps {
  url: string;
  className?: string;
}

export default function PdfCanvasViewer({ url, className = '' }: PdfCanvasViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;
    let activeRenderTasks: any[] = [];
    let pdfDoc: any = null;

    async function loadAndRender() {
      if (!containerRef.current) return;
      setLoading(true);
      setError(null);

      try {
        const loadingTask = pdfjsLib.getDocument({ url });
        pdfDoc = await loadingTask.promise;

        if (isCancelled) return;

        const container = containerRef.current;
        if (!container) return;

        // Container client width (fallback to 600 if 0)
        const containerWidth = container.clientWidth || 600;
        const dpr = Math.min(window.devicePixelRatio || 1, 2.5); // Cap DPR to 2.5 to balance crispness & memory

        // Clear existing canvases
        container.innerHTML = '';

        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
          if (isCancelled) return;

          const page = await pdfDoc.getPage(pageNum);
          if (isCancelled) return;

          const unscaledViewport = page.getViewport({ scale: 1 });
          // Scale to fit container with some margin
          const padding = 16;
          const targetWidth = Math.max(containerWidth - padding * 2, 280);
          const scale = targetWidth / unscaledViewport.width;
          const viewport = page.getViewport({ scale });

          const pageWrapper = document.createElement('div');
          pageWrapper.className = 'relative flex justify-center mb-6 last:mb-0 shadow-xl rounded-sm overflow-hidden bg-white';

          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d', { alpha: false });
          if (!ctx) continue;

          canvas.width = Math.floor(viewport.width * dpr);
          canvas.height = Math.floor(viewport.height * dpr);
          canvas.style.width = `${Math.floor(viewport.width)}px`;
          canvas.style.height = `${Math.floor(viewport.height)}px`;
          canvas.className = 'block max-w-full h-auto';

          const transform = dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined;
          const renderContext = {
            canvasContext: ctx,
            viewport,
            transform,
          };

          const renderTask = page.render(renderContext);
          activeRenderTasks.push(renderTask);

          pageWrapper.appendChild(canvas);
          container.appendChild(pageWrapper);

          await renderTask.promise;
        }

        if (!isCancelled) {
          setLoading(false);
        }
      } catch (err: any) {
        if (!isCancelled && err?.name !== 'RenderingCancelledException') {
          console.error('PDF rendering error:', err);
          setError('Failed to load PDF preview.');
          setLoading(false);
        }
      }
    }

    loadAndRender();

    const handleResize = () => {
      clearTimeout((handleResize as any).timer);
      (handleResize as any).timer = setTimeout(() => {
        if (!isCancelled) loadAndRender();
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isCancelled = true;
      window.removeEventListener('resize', handleResize);
      activeRenderTasks.forEach((t) => {
        try {
          t.cancel();
        } catch {}
      });
      if (pdfDoc) {
        try {
          pdfDoc.destroy();
        } catch {}
      }
    };
  }, [url]);

  return (
    <div className={`relative flex flex-col items-center w-full min-h-full overflow-y-auto p-4 sm:p-6 bg-[#1f1f27] ${className}`}>
      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-ink-2/85 backdrop-blur-xs">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-crimson" />
          <span className="mt-3 font-sans text-xs tracking-wider text-mist">Loading Resume...</span>
        </div>
      )}

      {error ? (
        <div className="my-auto flex flex-col items-center justify-center p-6 text-center text-mist">
          <p className="text-sm">{error}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-xs font-semibold text-bone hover:bg-white/20"
          >
            Open Original PDF ↗
          </a>
        </div>
      ) : (
        <div ref={containerRef} className="flex flex-col items-center w-full max-w-3xl" />
      )}
    </div>
  );
}
