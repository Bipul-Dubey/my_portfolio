"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { ContactLinks } from "@/constants/site_constant";

export default function ContactUs() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-28">
        {/* Main Card Container */}
        <div className="border-border/40 bg-secondary/20 mx-auto max-w-6xl overflow-hidden rounded-[28px] border shadow-xl backdrop-blur-md">
          <div className="grid md:grid-cols-2">
            {/* LEFT: Contact Form */}
            <div className="relative p-6 md:p-10" ref={formRef}>
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-2 mb-8"
              >
                <h2 className="from-foreground to-foreground/80 bg-linear-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Let’s
                </h2>
                <span className="text-primary relative z-10 text-4xl font-bold tracking-tight italic md:text-5xl">
                  Connect
                </span>
                <SparklesCore
                  id="tsparticles"
                  background="transparent"
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={500}
                  className="absolute inset-0 top-0 h-24 w-full"
                  particleColor="#e60a64"
                />
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" placeholder="Your name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message..."
                    rows={6}
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Button
                    type="submit"
                    disabled
                    className="w-full flex items-center justify-center gap-2 text-base font-medium"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            {/* RIGHT: Globe Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden md:flex items-center justify-center overflow-hidden p-8 md:p-12"
            >
              <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border px-10 pt-0 pb-40 md:pb-60">
                <span className="pointer-events-none bg-linear-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10">
                  Connect From Anywhere
                </span>
                <Globe className="top-28" />
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
              </div>
            </motion.div>
          </div>

          {/* ✅ Contact Links Inside Container */}
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border-t border-border/30 px-6 md:px-8 py-6"
          >
            <div
              className="
      flex flex-wrap 
      justify-center 
      items-center 
      gap-8
    "
            >
              {ContactLinks.map(({ href, icon: Icon, gradient }, i) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="cursor-pointer"
                >
                  <div
                    className={`
            flex h-11 w-11 items-center justify-center 
            rounded-2xl shadow-md hover:shadow-lg transition-all
            bg-linear-to-br ${gradient}
          `}
                  >
                    <Icon className="w-7 h-7 text-white drop-shadow-sm" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
