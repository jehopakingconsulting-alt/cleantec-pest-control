import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import SectionHeading from "./SectionHeading";

export default function VideoSection({ dict }: { dict: Dictionary }) {
  const h = dict.home;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <SectionHeading title={h.videoTitle} subtitle={h.videoSubtitle} />
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Original company video — replace the poster image and src with the real video file/URL */}
        <figure className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
          <div className="relative aspect-video w-full bg-brand-ink">
            <Image src="/images/fum-image8.jpeg" alt={h.videoOriginalCaption} fill className="object-cover opacity-70" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-dark text-2xl shadow-lg">
                ▶
              </span>
            </div>
            <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-1 text-xs font-semibold text-white">
              Bientôt disponible / Coming soon
            </span>
          </div>
          <figcaption className="px-5 py-4 text-sm font-semibold text-brand-ink">{h.videoOriginalCaption}</figcaption>
        </figure>

        {/* YouTube channel embed — replace VIDEO_ID with the company's real upload */}
        <figure className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=CleantecPestControl"
              title={h.videoYoutubeCaption}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <figcaption className="px-5 py-4 text-sm font-semibold text-brand-ink">{h.videoYoutubeCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
