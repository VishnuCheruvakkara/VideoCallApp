import { ArrowRight, Check, Clock3, MessageCircle, ShieldCheck, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

const features = [
  { icon: Video, title: "Crystal-clear calls", text: "Meet face-to-face without the setup hassle." },
  { icon: MessageCircle, title: "Chat alongside", text: "Keep messages and conversations in one place." },
  { icon: ShieldCheck, title: "Private by design", text: "Your conversations stay focused on your team." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Video className="h-5 w-5" /></span>
          <span className="text-lg font-semibold tracking-tight">Meetly</span>
        </div>
        <div className="flex items-center gap-3">
          <a className="hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:block" href="#features">Features</a>
          <ModeToggle />
          <Link href="/sign-in" className="rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90">Sign in</Link>
        </div>
      </nav>

      <section className="mx-auto grid w-full max-w-6xl items-center gap-14 px-6 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground shadow-sm"><span className="h-2 w-2 rounded-full bg-primary" />Simple conversations, better connections</div>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">Meet, talk, and stay connected.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">A calm, focused space for video calls and real-time conversations with the people who matter.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/sign-up" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 font-medium text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">Start a meeting <ArrowRight className="h-4 w-4" /></Link>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 font-medium transition-colors hover:bg-accent"><Clock3 className="h-4 w-4 text-primary" />Schedule for later</button>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" />No download required</span><span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Works in your browser</span></div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-xl shadow-primary/5 sm:p-6">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary p-5">
            <Image src="/images/ocean-breeze-call-hero.png" alt="Abstract video call interface background" fill priority className="object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-background/10" />
            <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between text-xs font-medium text-muted-foreground"><span>Design team sync</span><span>10:24 AM</span></div>
            <div className="mt-5 grid h-[calc(100%-2rem)] grid-cols-2 gap-3"><div className="flex items-end rounded-xl bg-primary/25 p-3"><span className="rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium">You</span></div><div className="flex items-end rounded-xl bg-foreground/10 p-3"><span className="rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium">Alex</span></div><div className="col-span-2 flex items-end rounded-xl bg-secondary p-3"><span className="rounded-full bg-background/80 px-2.5 py-1 text-xs font-medium">Sam is joining...</span></div></div>
            </div>
          </div>
          <div className="flex items-center justify-between px-1 pt-5"><div><p className="text-sm font-medium">Ready when you are</p><p className="mt-1 text-xs text-muted-foreground">Your next call is one click away.</p></div><span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_0_5px] shadow-primary/15" /></div>
        </div>
      </section>

      <section id="features" className="border-t border-border bg-card/40"><div className="mx-auto grid w-full max-w-6xl gap-4 px-6 py-12 sm:grid-cols-3 lg:px-8">{features.map(({ icon: Icon, title, text }) => <div key={title} className="rounded-2xl border border-border bg-background p-5"><Icon className="h-5 w-5 text-primary" /><h2 className="mt-5 font-semibold">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div>)}</div></section>
    </main>
  );
}
