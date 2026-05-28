import Link from "next/link"
import Image from "next/image"
import Container from "../Ui/Container"
import { FadeUp } from "../Ui/Motion"

const btnBase =
  "inline-flex items-center justify-center rounded-full px-6 py-3 font-medium transition"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-48 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 fade-in">
      {/* Soft  glow behind content */}
      <div
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[80vh] w-[80vh] rounded-full bg-indigo-500/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[90vw] -translate-x-1/2 bg-gradient-to-t from-slate-950/80 to-transparent"
        aria-hidden
      />

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 max-w-2xl space-y-6">
            <FadeUp>
              <p className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-gray-300">
                Stewart Futures
              </p>
            </FadeUp>

            <FadeUp>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-gray-200 to-indigo-200 bg-clip-text text-transparent">
                  Turning vision into
                </span>{" "}
                digital reality.
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="max-w-xl text-lg text-gray-400">
                A multidisciplinary approach to design, engineering, and storytelling—crafted to leave a lasting impact.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className={`${btnBase} bg-white text-black hover:opacity-90`}
                >
                  Get Started
                </Link>
                <Link
                  href="/work"
                  className={`${btnBase} border border-white text-white hover:bg-white hover:text-black`}
                >
                  View Work
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Floating Image Section */}
          <div className="relative mx-auto lg:mr-0 z-10 w-full max-w-md lg:max-w-full perspective-1000">
            <FadeUp delay={0.3}>
              <div className="relative animate-float">
                {/* Glow/Backlight behind image */}
                <div className="absolute inset-0 bg-indigo-500/30 blur-[100px] rounded-full scale-75 animate-pulse-slow" />

                <div className="relative z-10 transition-transform duration-500 hover:scale-[1.02]">
                  <Image
                    src="/images/founder-photo.png"
                    alt="Founder"
                    width={600}
                    height={800}
                    className="w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#services"
          className="flex flex-col items-center gap-1 text-gray-500 transition hover:text-gray-400"
          aria-label="Scroll to content"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="block h-6 w-4 rounded-full border-2 border-current" />
        </a>
      </div>

    </section>
  )
}
