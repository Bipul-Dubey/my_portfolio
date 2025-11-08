"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe } from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:bipuldubey.tech@gmail.com",
    icon: Mail,
    gradient: "from-pink-500/20 via-rose-500/10 to-pink-500/5",
    textColor: "text-pink-600 dark:text-pink-400",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/bipuldubey",
    icon: Linkedin,
    gradient: "from-blue-500/20 via-sky-500/10 to-blue-500/5",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/Bipul-Dubey",
    icon: Github,
    gradient: "from-gray-500/20 via-gray-400/10 to-gray-500/5",
    textColor: "text-gray-700 dark:text-gray-300",
  },
];

export default function ContactUs() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full overflow-hidden py-8">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="border-t border-border/30  px-6 md:px-10 py-10
             grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {contactLinks.map(
              ({ label, href, icon: Icon, gradient, textColor }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={cn(
                    `group relative flex items-start gap-4 rounded-2xl border border-border/40 
         bg-background/60 p-5 shadow-md backdrop-blur-md transition-all duration-300
         hover:shadow-xl hover:border-primary/40`
                  )}
                >
                  {/* Icon */}
                  <div
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center 
        rounded-xl bg-linear-to-br ${gradient} text-white shadow-inner`}
                  >
                    <Icon className="w-6 h-6" />
                    {/* Glow ring effect */}
                    <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col justify-center">
                    <span
                      className={cn(
                        "font-semibold text-lg md:text-xl leading-tight",
                        textColor
                      )}
                    >
                      {label}
                    </span>

                    {label === "Email" && (
                      <span className="text-muted-foreground text-sm mt-1">
                        bipuldubey.tech@gmail.com
                      </span>
                    )}
                    {label === "LinkedIn" && (
                      <span className="text-muted-foreground text-sm mt-1">
                        linkedin.com/in/bipuldubey
                      </span>
                    )}
                    {label === "GitHub" && (
                      <span className="text-muted-foreground text-sm mt-1">
                        github.com/Bipul-Dubey
                      </span>
                    )}
                  </div>

                  {/* Hover light overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.a>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
