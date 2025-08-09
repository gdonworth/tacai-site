"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Check, X, Mail, Building2, Lock, Sparkles, Chrome, BookOpen, MessageSquare } from "lucide-react";

export default function Page() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does TACAI work?",
      a: "TACAI runs in your browser and scans a site's policies (terms, privacy, cookies). Our model summarizes key risks and assigns a Friendliness Score you can see at a glance—red (high risk) to green (low risk)."
    },
    {
      q: "Which browsers are supported?",
      a: "Launch support: Chrome and Brave (Chromium). Edge support is next. Firefox and Safari are on the roadmap."
    },
    {
      q: "What data does TACAI collect?",
      a: "We aim to keep you as anonymous as possible. We avoid storing personally identifiable data and minimize any event collection to what’s necessary for service and billing."
    },
    {
      q: "Do you have a free trial?",
      a: "Yes. Weekly: 5 days free, Monthly: 10 days free, Annual: 15 days free. Cancel anytime during the trial to avoid charges."
    },
    {
      q: "Do you offer business plans?",
      a: "Yes. We support team licenses, centralized billing, and policy controls for organizations. Contact sales to get a tailored plan."
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Instant Risk Score",
      desc: "See a site's Friendliness Score before you share a single byte—plugin icon shifts from red to green."
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Policy Decoder",
      desc: "AI turns dense terms, privacy, and cookie policies into clear, scannable bullet points."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Ask Anything",
      desc: "Use the in-plugin search to ask targeted questions (e.g., ‘Do they sell data to brokers?’)."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Receipts, Not Vibes",
      desc: "Transparent summaries with citations to the exact policy lines we analyzed."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-30 backdrop-blur bg-black/60 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 border border-emerald-400/30">
              <Shield className="w-5 h-5 text-emerald-300" />
            </div>
            <span className="font-semibold tracking-tight">TACAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#b2b" className="hover:text-white">For Teams</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#install" className="rounded-xl px-4 py-2 bg-white text-black text-sm font-medium hover:bg-zinc-200 transition">Install Free</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Browse Smarter. <span className="text-emerald-300">Protect Your Privacy.</span>
            </h1>
            <p className="mt-4 text-white/70 text-lg">TACAI instantly reveals hidden policy risks so you're always in control.</p>

            <div id="install" className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#chrome-store" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition">
                <Chrome className="w-5 h-5" /> Install on Chrome
              </a>
              <a href="#brave" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white/10 border border-white/15 hover:bg-white/15 transition">
                <Chrome className="w-5 h-5" /> Brave (Chromium)
              </a>
              <a href="#edge" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white/10 border border-white/15 hover:bg-white/15 transition">
                <Chrome className="w-5 h-5" /> Edge (soon)
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-sm text-white/70">A Note From Our Founder</p>
              <p className="mt-2 text-white/90">“We built TACAI because understanding what you’re agreeing to online is nearly impossible. TACAI is your privacy co‑pilot — decoding hidden risks and giving you the power to make informed choices before you click.”</p>
              <p className="mt-2 text-sm text-white/60">— Greg Donworth, Founder</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent p-4">
              <div className="h-full w-full rounded-xl bg-black/60 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-white/70">Plugin UI Screenshot Placeholder</p>
                  <p className="text-xs text-white/50 mt-1">(Replace with real capture showing Risk Score + summary)</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 hidden lg:block">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 max-w-xs">
                <p className="text-sm font-medium">Instant Friendliness Score</p>
                <p className="text-sm text-white/70 mt-1">Icon shifts from <span className="text-red-400">red</span> to <span className="text-emerald-300">green</span> as risk drops.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="py-20 border-t border-white/10 bg-gradient-to-b from-black to-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold">Meet TACAI: Your Privacy Co‑Pilot</h2>
            <p className="mt-3 text-white/70">Instantly decode website policies and terms, giving you the power to make informed choices about your data—everywhere you go online.</p>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center mb-4">
                  {f.icon}
                </div>
                <p className="font-medium">{f.title}</p>
                <p className="text-sm text-white/70 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Your VPN Protects Your IP. TACAI Protects Your Data.</h3>
            <p className="mt-3 text-white/70">Go beyond basic privacy. TACAI adds a crucial layer, safeguarding your information from hidden policy abuses, AI training, and data brokers.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="font-medium">Instantly See Your Risk Score</p>
              <p className="text-sm text-white/70 mt-1">The Friendliness Score gives immediate clarity. Our plugin icon changes from red (high risk) to green (low risk) so you know a site’s policy at a glance.</p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-black/60 grid place-items-center">
            <p className="text-white/60">Illustration Placeholder (VPN shield + TACAI shield)</p>
          </div>
        </div>
      </section>

      <section className="py-20 border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold">The Privacy Problem is Bigger Than You Think.</h3>
          <p className="text-white/70 mt-2">Are You Truly Protected?</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[{n: "91%", t: "blindly agree to terms and conditions."}, {n: "81%", t: "feel the risks of data collection outweigh benefits."}, {n: "60%", t: "are convinced their personal data is routinely misused."}].map((s, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-4xl font-semibold text-emerald-300">{s.n}</p>
                <p className="mt-2 text-white/70">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold">Choose Your Plan. Own Your Data.</h3>
            <p className="text-white/70 mt-2">Unlock complete control over your online privacy with TACAI.</p>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col">
              <div className="text-sm uppercase tracking-wide text-white/60">Weekly</div>
              <div className="mt-2 text-4xl font-semibold">$1.99 <span className="text-base text-white/50">/ week</span></div>
              <p className="mt-2 text-sm text-white/70">5‑day free trial. Cancel anytime.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Full plugin features</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Risk score + summaries</li>
              </ul>
              <a href="#checkout-weekly" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-white text-black font-medium hover:bg-zinc-200 transition">Start 5‑Day Trial <ArrowRight className="w-4 h-4" /></a>
            </div>

            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6 flex flex-col">
              <div className="text-sm uppercase tracking-wide text-emerald-300">Most Popular</div>
              <div className="mt-2 text-4xl font-semibold">$4.99 <span className="text-base text-white/50">/ month</span></div>
              <p className="mt-2 text-sm text-white/80">10‑day free trial. Cancel anytime.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/90">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Everything in Weekly</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Priority updates</li>
              </ul>
              <a href="#checkout-monthly" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition">Start 10‑Day Trial <ArrowRight className="w-4 h-4" /></a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col">
              <div className="text-sm uppercase tracking-wide text-white/60">Annual</div>
              <div className="mt-2 text-4xl font-semibold">$39.99 <span className="text-base text-white/50">/ year</span></div>
              <p className="mt-2 text-sm text-white/70">15‑day free trial. Best value.</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 2 months free vs monthly</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Early feature access</li>
              </ul>
              <a href="#checkout-annual" className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-white text-black font-medium hover:bg-zinc-200 transition">Start 15‑Day Trial <ArrowRight className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="b2b" className="py-20 border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-2"><Building2 className="w-6 h-6" /> Corporate & Team Solutions</h3>
            <p className="mt-3 text-white/70">Protect your entire organization. Get tailored solutions to ensure comprehensive data privacy across your team.</p>
            <ul className="mt-6 space-y-2 text-white/80 text-sm">
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Team licenses & centralized billing</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Policy controls & compliance guardrails</li>
              <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Priority support & onboarding</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm text-white/70">Work Email</label>
              <input type="email" placeholder="name@company.com" className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-white/70">Company</label>
              <input type="text" placeholder="Company Inc." className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-white/70">Team Size</label>
              <select className="w-full rounded-xl bg-black border border-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400">
                <option>10–25</option>
                <option>26–100</option>
                <option>101–250</option>
                <option>251–1000</option>
                <option>1000+</option>
              </select>
            </div>
            <button type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition">
              <Mail className="w-4 h-4" /> Contact Sales
            </button>
            <p className="text-xs text-white/50">Submitting this form will put you in touch with our team. We’ll reply within 1 business day.</p>
          </form>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold">Questions & Answers</h3>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
            {faqs.map((f, i) => (
              <div key={i} className="p-5">
                <button onClick={() => setOpenFAQ(openFAQ === i ? null : i)} className="w-full flex items-center justify-between text-left">
                  <span className="font-medium">{f.q}</span>
                  <span className="text-white/50">{openFAQ === i ? <X className="w-5 h-5"/> : <MessageSquare className="w-5 h-5"/>}</span>
                </button>
                {openFAQ === i && (
                  <p className="mt-3 text-white/70">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-zinc-950 to-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-semibold">Your Data. Your Rules.</h3>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">Data is constantly collected and sold—often without your true consent. TACAI puts you back in control. Ready to reclaim your privacy?</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#chrome-store" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-emerald-400 text-black font-medium hover:bg-emerald-300 transition">
              Install for Free <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-white/10 border border-white/15 hover:bg-white/15 transition">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-white/70">
          <div>
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-emerald-300" /> <span className="font-semibold">TACAI</span>
            </div>
            <p className="mt-3 max-w-xs">Your privacy co‑pilot for the modern web.</p>
          </div>
          <div>
            <p className="text-white/80 font-medium">Product</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/80 font-medium">Company</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#b2b" className="hover:text-white">For Teams</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/80 font-medium">Legal</p>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} TACAI. All rights reserved.</div>
      </footer>
    </div>
  );
}
