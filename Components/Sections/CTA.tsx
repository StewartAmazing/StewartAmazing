"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Container from "../Ui/Container"

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-32 md:py-48">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-4xl text-center space-y-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-6xl/tight font-bold tracking-tight text-white"
          >
            Ready to build something <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              extraordinary?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mx-auto max-w-xl text-lg md:text-xl text-zinc-400 font-light"
          >
            Whether you have a fully fleshed-out idea or just a spark of inspiration, let&apos;s turn it into a reality together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-100 hover:ring-2 hover:ring-white/50 hover:ring-offset-2 hover:ring-offset-zinc-950 btn-animate"
            >
              <span>Start a Project</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
