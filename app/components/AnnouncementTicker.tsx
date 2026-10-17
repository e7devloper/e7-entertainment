import Link from "next/link";

type AnnouncementTickerProps = {
  label: string;
  messages: string[];
  href: string;
  className?: string;
};

export function AnnouncementTicker({
  label,
  messages,
  href,
  className = "",
}: AnnouncementTickerProps) {
  return (
    <Link
      href={href}
      aria-label={`${label}: ${messages.join(". ")}`}
      className={`group flex items-stretch overflow-hidden bg-ink text-white ${className}`}
    >
      <span className="relative z-10 flex shrink-0 items-center bg-gold px-4 font-display text-[11px] font-bold uppercase tracking-[0.2em] text-ink sm:px-6 sm:text-xs">
        {label}
      </span>
      <div
        className="ticker-viewport relative flex-1 overflow-hidden py-3"
        aria-hidden="true"
      >
        <div className="ticker-track flex w-max whitespace-nowrap font-display text-xs font-semibold tracking-[0.02em] group-hover:[animation-play-state:paused] sm:text-sm">
          {[0, 1].map((copy) => (
            <span key={copy} className="flex items-center">
              {messages.map((message, i) => (
                <span key={i} className="flex items-center">
                  <span className="px-6">{message}</span>
                  <span className="text-gold">•</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
