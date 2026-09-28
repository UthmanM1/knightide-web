import Link from "next/link";
import { Pill } from "@/components/Bits";
import { Lock, Mail, Key, Refresh, Shield, CreditCard } from "@/components/icons";

export default function SignInPage() {
  return (
    <>
      <section className="section pb-10 pt-12 sm:pt-16">
        <div className="section-inner max-w-2xl">
          <Pill>Protected access</Pill>
          <h1 className="mt-4 text-4xl sm:text-5xl">Sign in, create an account or subscribe</h1>
          <p className="mt-4 text-base text-mist-300">
            Public browsing stays open. Protected member destinations require a verified
            account and secure session.
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div className="card border-lime-500/60">
            <div className="flex gap-2">
              <span className="rounded-sm bg-lime-500 px-4 py-1.5 text-sm font-semibold text-ink-950">Sign in</span>
              <span className="rounded-sm px-4 py-1.5 text-sm font-semibold text-mist-400">Create account</span>
            </div>
            <h2 className="mt-5 font-display text-2xl">Welcome back</h2>
            <div className="mt-5 space-y-4">
              <div>
                <label className="mb-1 block text-xs font-semibold text-mist-400">Email address</label>
                <div className="flex items-center gap-2 rounded-sm border border-ink-600 bg-ink-900 px-3 py-2.5">
                  <Mail className="h-4 w-4 text-mist-500" />
                  <input disabled placeholder="maya@example.com" className="w-full bg-transparent text-sm text-mist-300 placeholder:text-mist-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-mist-400">Password</label>
                <div className="flex items-center gap-2 rounded-sm border border-ink-600 bg-ink-900 px-3 py-2.5">
                  <Lock className="h-4 w-4 text-mist-500" />
                  <input disabled type="password" placeholder="••••••••••••" className="w-full bg-transparent text-sm text-mist-300 placeholder:text-mist-500 focus:outline-none" />
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-mist-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" disabled className="h-3.5 w-3.5" /> Remember this device
                </label>
                <Link href="#recover" className="font-semibold text-lime-500 hover:text-lime-400">Recover access</Link>
              </div>
              <button type="button" className="btn-primary w-full">Sign in securely</button>
              <p className="text-center text-xs text-mist-500">
                New to Knightide? Create an account before or during checkout.
              </p>
            </div>
          </div>

          <div className="card border-amber-500/60">
            <Pill>After payment</Pill>
            <h2 className="mt-4 font-display text-2xl">Enter a generated key</h2>
            <p className="mt-3 text-sm text-mist-400">
              Use the one-time key from Subscription Success if verification is still in
              progress or you are linking a new device.
            </p>
            <div className="mt-5">
              <label className="mb-1 block text-xs font-semibold text-mist-400">Generated member key</label>
              <div className="flex items-center gap-2 rounded-sm border border-ink-600 bg-ink-900 px-3 py-2.5">
                <Key className="h-4 w-4 text-mist-500" />
                <input disabled placeholder="KND-____-____" className="w-full bg-transparent text-sm text-mist-300 placeholder:text-mist-500 focus:outline-none" />
              </div>
            </div>
            <button type="button" className="btn-amber mt-4 w-full">Verify key</button>
            <p className="mt-4 text-xs text-mist-500">
              Knightide Support will never ask for your password or complete key in a
              message or call.
            </p>
          </div>
        </div>
      </section>

      <section id="recover" className="section pt-0">
        <div className="section-inner grid gap-6 sm:grid-cols-2">
          <div className="card flex items-start gap-4">
            <Refresh className="h-6 w-6 flex-shrink-0 text-lime-500" />
            <div>
              <h3 className="font-semibold text-mist-100">Recover access safely</h3>
              <p className="mt-1 text-sm text-mist-400">
                Request a time-limited email link, verify your account and end
                unrecognized sessions.
              </p>
              <Link href="mailto:support@knightide.example" className="btn-secondary mt-3 inline-flex">Recover access</Link>
            </div>
          </div>
          <div className="card flex items-start gap-4">
            <Shield className="h-6 w-6 flex-shrink-0 text-lime-500" />
            <div>
              <h3 className="font-semibold text-mist-100">Protected-session messaging</h3>
              <p className="mt-1 text-sm text-mist-400">
                Sensitive account, payment and trainer communications appear only after
                sign in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-ink-800">
        <div className="section-inner">
          <span className="eyebrow">Subscribe</span>
          <h2 className="mt-4 text-3xl sm:text-4xl">Choose a plan, then check out securely</h2>
          <p className="mt-4 max-w-xl text-sm text-mist-300">
            You will see confirmation, entitlements, a generated key and the Verification →
            Onboarding → Dashboard handoff after payment.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <label className="card flex cursor-pointer items-center justify-between border-lime-500/60">
                <div className="flex items-center gap-3">
                  <input type="radio" name="plan" defaultChecked className="h-4 w-4" />
                  <div>
                    <div className="font-display text-xl">Complete</div>
                    <div className="text-sm text-mist-400">Dashboard, full training, AI Trainer, Human Trainer discovery, selected events and connected devices</div>
                  </div>
                </div>
                <div className="whitespace-nowrap font-display text-xl text-amber-500">£29 / month</div>
              </label>
              <label className="card flex cursor-pointer items-center justify-between">
                <div className="flex items-center gap-3">
                  <input type="radio" name="plan" className="h-4 w-4" />
                  <div>
                    <div className="font-display text-xl">Flex</div>
                    <div className="text-sm text-mist-400">Dashboard, two active plans, core AI Trainer and web/mobile access</div>
                  </div>
                </div>
                <div className="whitespace-nowrap font-display text-xl text-amber-500">£12 / month</div>
              </label>
              <ul className="space-y-2 pt-2 text-sm text-mist-400">
                <li>&check; Clear recurring status and next billing date</li>
                <li>&check; Manage or turn off renewal from Membership</li>
                <li>&check; Human Trainer appointments and some events priced separately</li>
              </ul>
            </div>

            <div className="card border-amber-500/60">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl">Secure checkout</h3>
                <Lock className="h-5 w-5 text-amber-500" />
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-mist-400">Name on payment method</label>
                  <div className="rounded-sm border border-ink-600 bg-ink-900 px-3 py-2.5 text-sm text-mist-300">Maya Chen</div>
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-mist-400">Card information</label>
                  <div className="flex items-center gap-2 rounded-sm border border-ink-600 bg-ink-900 px-3 py-2.5 text-sm text-mist-300">
                    <CreditCard className="h-4 w-4 text-mist-500" /> 1234 5678 9012 3456
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-mist-400">Expiry</label>
                    <div className="rounded-sm border border-ink-600 bg-ink-900 px-3 py-2.5 text-sm text-mist-300">MM / YY</div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-mist-400">Security code</label>
                    <div className="rounded-sm border border-ink-600 bg-ink-900 px-3 py-2.5 text-sm text-mist-300">CVC</div>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-ink-700 pt-4">
                  <span className="text-sm font-semibold text-mist-300">Due today</span>
                  <span className="font-display text-2xl text-amber-500">£29.00</span>
                </div>
                <Link href="/subscribe/success" className="btn-primary w-full">Pay and subscribe</Link>
                <p className="text-xs text-mist-500">
                  By confirming, you agree to the Membership, payment and safety terms and
                  acknowledge the Privacy notice. Renews monthly until canceled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
