export default function TestimonialCard({
  name,
  city,
  rating,
  text,
}: {
  name: string;
  city: string;
  rating: number;
  text: string;
}) {
  return (
    <figure className="flex flex-col rounded-2xl bg-brand-gray p-6 shadow-sm h-full">
      <div className="text-brand-light text-lg mb-3" aria-hidden>
        {"⭐".repeat(rating)}
      </div>
      <blockquote className="text-brand-ink/80 italic flex-1">&ldquo;{text}&rdquo;</blockquote>
      <figcaption className="mt-4 font-heading font-bold text-brand-dark">
        {name} <span className="font-body font-normal text-brand-ink/60">— {city}</span>
      </figcaption>
    </figure>
  );
}
