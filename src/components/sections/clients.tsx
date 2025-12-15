"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

const clients = [
  "Logitech",
  "Mercedes-Benz",
  "University of Arizona",
  "London School of Medical Science",
];

export function Clients() {
  return (
    <section className="py-16 border-y border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/50">
      <Container>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 dark:text-slate-500 mb-8"
        >
          Trusted by teams at
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
        >
          {clients.map((client) => (
            <span
              key={client}
              className="text-lg font-medium text-slate-400 dark:text-slate-600"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
