"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { CodeBlock } from "@/components/ui/CodeBlock";

export function HowItWorks() {
  return (
    <section className="px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Three steps to enforcement
          </h2>
          <p className="text-text-secondary text-lg">
            Get started in under a minute.
          </p>
        </motion.div>

        <div className="space-y-16">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-full border-2 border-cyan bg-cyan/10 flex items-center justify-center text-cyan font-bold text-sm">
                  {step.step}
                </div>
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-cyan/50 to-transparent mt-3" />
                )}
              </div>

              <div className="flex-1 pb-4">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-text-secondary mb-4">{step.description}</p>
                {step.command && (
                  <div className="rounded-lg border border-border bg-bg-secondary px-4 py-3 font-mono text-sm text-cyan-light">
                    $ {step.command}
                  </div>
                )}
                {step.config && (
                  <CodeBlock code={step.config} language=".chaperone.json" showCopy={false} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
