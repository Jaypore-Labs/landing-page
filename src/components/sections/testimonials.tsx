"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
            Client feedback
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            What people say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800"
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div>
                <div className="font-medium text-slate-900 dark:text-white text-sm">
                  {testimonial.name}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-500">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
