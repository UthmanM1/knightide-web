import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { Pill } from "@/components/Bits";
import { Check, Grid, Bolt, Calendar, Shield, Chat, Devices } from "@/components/icons";

const nextSteps = [
  { n: "01", title: "Verify account", body: "Open the secure link sent to maya@example.com.", cta: "Send link again", active: true },
  { n: "02", title: "Set up training", body: "Choose disciplines, experience, schedule and adaptive formats.", cta: "Start onboarding" },
  { n: "03", title: "Review permissions", body: "Camera, microphone and motion/spatial sensor guidance remain off until requested.", cta: "Review controls" },
];

const gateway = [
  { icon: <Grid className="h-6 w-6" />, title: "Dashboard", body: "Your connected overview and next steps" },
  { icon: <Bolt className="h-6 w-6" />, title: "Training", body: "Plans, sessions, Human Trainer and AI Trainer" },
  { icon: <Calendar className="h-6 w-6" />, title: "Events", body: "Tickets, live broadcasts, replay and chat" },
  { icon: <Shield className="h-6 w-6" />, title: "Membership", body: "Plan, entitlements and payment history" },
  { icon: <Chat className="h-6 w-6" />, title: "Communication", body: "Trainer, event and support conversations" },
  { icon: <Devices className="h-6 w-6" />, title: "Devices", body: "Downloads, compatibility and permissions" },
];

export default function SubscriptionSuccessPage() {
  return (
    <>
      <section className="section pb-10 pt-12 sm:pt-16">
        <div className="section-inner max-w-2xl">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-500 text-ink-950">
            <Check className="h-6 w-6" />
          </span>
          <div className="mt-4"><Pill>Payment confirmed &middot; KT-204981</Pill></div>
          <h1 className="mt-4 text-4xl sm:text-5xl">Welcome to Complete membership</h1>
          <p className="mt-4 text-base text-mist-300">
            Your receipt is on its way to maya@example.com. Finish account verification,
            save your generated key and choose an onboarding path before entering protected
            member features.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="card border-amber-500/60">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl">Complete monthly</h2>
              <span className="font-display text-2xl text-amber-500">£29 / mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-mist-300">
              <li>&check; Dashboard and synchronized progress</li>
              <li>&check; Training plans and AI Trainer demonstrations</li>
              <li>&check; Human Trainer discovery and Communication</li>
              <li>&check; Selected event broadcasts and replays</li>
            </ul>
            <p className="mt-4 text-xs text-mist-500">
              Renews 27 October 2026. Human Trainer appointments and ticketed events may be
              additional. Manage renewal in Membership.
            </p>
          </div>
          <div className="card border-lime-500/60">
            <span className="eyebrow">Generated member key</span>
            <div className="mt-2 font-display text-2xl tracking-wide">KND-7HX9-2QPA</div>
            <p className="mt-3 text-sm text-mist-400">
              Use this one-time key if you sign in on another device before verification
              completes. It does not replace your password.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" className="btn-primary">Copy key</button>
              <button type="button" className="btn-secondary">Download receipt</button>
            </div>
            <p className="mt-4 text-xs text-mist-500">
              Keep this key private. Knightide Support will never ask you to read it aloud
              in full.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-t border-ink-800">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Next step"
            title="Verify, personalize, continue"
            description="These protected handoff steps connect your payment to the right account while preserving your device and accessibility choices."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {nextSteps.map((s) => (
              <div key={s.n} className={`card ${s.active ? "border-lime-500/60" : ""}`}>
                <div className="font-display text-2xl text-lime-500">{s.n}</div>
                <h3 className="mt-2 font-display text-base uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{s.body}</p>
                <Link href="/sign-in" className={`mt-4 inline-flex ${s.active ? "btn-primary" : "btn-secondary"}`}>
                  {s.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-ink-800">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Your member gateway"
            title="Go directly to what you need"
            description="After verification, every card opens a signed-in destination. Account, Notifications, Privacy, Accessibility, Help/Safety and Settings remain available from the member utility menu."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {gateway.map((g) => (
              <div key={g.title} className="card">
                <div className="text-lime-500">{g.icon}</div>
                <h3 className="mt-3 font-display text-base uppercase">{g.title}</h3>
                <p className="mt-2 text-sm text-mist-400">{g.body}</p>
                <Link href="/sign-in" className="mt-3 inline-block text-sm font-semibold text-lime-500 hover:text-lime-400">
                  Open after verification &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-t border-ink-800 pb-20">
        <div className="section-inner grid items-center gap-8 rounded-md border border-ink-600 bg-ink-900 p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-2xl">Take Knightide with you</h2>
            <p className="mt-2 text-sm text-mist-400">
              Download desktop, continue on mobile or tablet, then review supported VR/AR/XR
              devices and sensor requirements from Devices.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/devices" className="btn-primary">Download desktop</Link>
            <Link href="/devices" className="btn-secondary">Open QR handoff</Link>
          </div>
        </div>
      </section>
    </>
  );
}
