import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  name,
  summary,
  image,
  href,
  ctaLabel,
}: {
  name: string;
  summary: string;
  image: string;
  href?: string;
  ctaLabel?: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm hover:shadow-xl transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading font-bold text-xl text-brand-dark mb-2">{name}</h3>
        <p className="text-sm text-brand-ink/70 flex-1">{summary}</p>
        {href && (
          <Link href={href} className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-light group-hover:text-brand-dark transition-colors">
            {ctaLabel ?? name} <span aria-hidden>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
