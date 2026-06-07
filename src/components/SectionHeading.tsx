export default function SectionHeading({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-brand-dark mb-3">{title}</h2>
      {subtitle && <p className="text-base text-brand-ink/70">{subtitle}</p>}
      <div className={`mt-4 h-1 w-16 rounded-full bg-brand-light ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
