"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A sensação é de ter contratado um novo funcionário, só que ele trabalha 24h por dia e não esquece nada.",
    author: "Diretor Comercial",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    quote:
      "A gente deixou de apagar incêndio e passou a acompanhar os números em tempo real. O agente faz o trabalho chato e repetitivo.",
    author: "Gestor Operacional",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            O que nossos <span className="text-gradient-multi">clientes</span> dizem
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Quote icon */}
              <div
                className={`absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${testimonial.gradient} opacity-10 group-hover:opacity-20 transition-opacity flex items-center justify-center`}
              >
                <Quote className="w-8 h-8 text-primary" />
              </div>

              <div className="relative z-10">
                <p className="text-lg md:text-xl leading-relaxed mb-6 italic">
                  <span aria-hidden="true">&ldquo;</span>
                  {testimonial.quote}
                  <span aria-hidden="true">&rdquo;</span>
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${testimonial.gradient}`} />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:scale-105 transition-transform hover:shadow-xl hover:shadow-primary/50">
            Entrar em contato
          </button>
        </motion.div>
      </div>
    </section>
  );
}
