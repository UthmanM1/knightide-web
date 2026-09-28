import Link from "next/link";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Training", href: "/training" },
  { label: "Human + AI", href: "/human-ai" },
  { label: "Events", href: "/events" },
  { label: "Membership", href: "/membership" },
  { label: "Devices/Downloads", href: "/devices" },
  { label: "Partnerships", href: "/partnerships" },
];

const utilityNav = [
  { label: "About", href: "/about" },
  { label: "Safety", href: "/safety" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Support", href: "/help" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-ink-600 bg-ink-950/95 backdrop-blur">
      <div className="hidden items-center justify-between border-b border-ink-700 px-6 py-1.5 text-[11px] font-semibold uppercase tracking-widest2 sm:flex sm:px-10 lg:px-16">
        <span className="text-amber-500">Premium training, on your terms</span>
        <nav className="flex items-center gap-4 text-mist-500">
          {utilityNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-mist-100">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-amber-500 font-display text-lg text-amber-500">
            K
          </span>
          <span className="font-display text-lg tracking-wide">Knightide</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-mist-300 lg:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-mist-100">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-sm font-semibold uppercase tracking-wide">
          <Link href="/sign-in" className="text-lime-500 hover:text-lime-400">
            Sign in
          </Link>
          <Link href="/sign-in?intent=subscribe" className="text-lime-500 hover:text-lime-400">
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}
