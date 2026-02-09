import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2, Cpu, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">MyApp</span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</Link>
            <Link href="#stack" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Stack</Link>
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/login">
              <Button className="bg-indigo-600 hover:bg-indigo-700">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 py-24 lg:py-32">
          {/* Background Gradient Orbs */}
          <div className="absolute top-0 -z-10 h-full w-full">
            <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-100/50 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px]" />
          </div>

          <div className="container mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              v1.0 is now live
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              Build your next SaaS <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">faster than ever before</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
              A premium, production-ready template using Next.js 16, .NET 8, and PostgreSQL.
              The ultimate starting point for modern full-stack applications.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/login">
                <Button size="lg" className="h-12 px-8 bg-indigo-600 hover:bg-indigo-700 text-lg shadow-lg shadow-indigo-200">
                  Deploy Template <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
                  Explore Features
                </Button>
              </Link>
            </div>
            <div className="mt-16 flex items-center justify-center gap-8 grayscale opacity-50">
              <Code2 className="h-8 w-8" />
              <Cpu className="h-8 w-8" />
              <Layers className="h-8 w-8" />
              <Globe className="h-8 w-8" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-slate-50 px-6 py-24">
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to scale</h2>
              <p className="mt-4 text-lg text-slate-600">Don't waste time on infrastructure. Focus on your product.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "High Performance",
                  desc: "Zero-latency UI using Next.js Server Components and a blazing fast .NET 8 API core.",
                  icon: <Zap className="h-6 w-6 text-indigo-600" />
                },
                {
                  title: "Secure by Design",
                  desc: "Ready-to-use JWT authentication, RBAC, and OWASP-compliant API security out of the box.",
                  icon: <ShieldCheck className="h-6 w-6 text-indigo-600" />
                },
                {
                  title: "Developer First",
                  desc: "Pre-configured Docker environments, CI pipelines, and a structured multi-agent workflow.",
                  icon: <Code2 className="h-6 w-6 text-indigo-600" />
                }
              ].map((feature, i) => (
                <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{feature.title}</h3>
                    <p className="text-slate-600">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-24">
          <div className="container mx-auto">
            <div className="rounded-3xl bg-indigo-600 px-6 py-16 text-center shadow-2xl shadow-indigo-200">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to launch your vision?</h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">
                Join hundreds of developers building the future of SaaS with MyApp.
              </p>
              <div className="mt-10 flex justify-center">
                <Link href="/login">
                  <Button size="lg" variant="secondary" className="h-12 px-8 text-lg font-bold text-indigo-600">
                    Get Started Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 px-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-indigo-600 font-bold text-white text-xs">
              M
            </div>
            <span className="font-bold text-slate-900">MyApp</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2026 MyApp Template. Built with Antigravity for modern teams.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-indigo-600">Documentation</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-indigo-600">Privacy</Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-indigo-600">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
