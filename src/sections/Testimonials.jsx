import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Alvaro is a rare find—an economist who ships production-grade code. He bridged the gap between our theoretical models and real-time execution, automating our entire inflation forecasting pipeline.",
    name: "Dr. Sarah Chen",
    title: "Head of Macro Strategy at GlobalFin Insights",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Most developers need months to understand the domain. Alvaro understood our liquidity challenges on day one. His ability to translate complex monetary policy into an intuitive dashboard was a game-changer.",
    name: "Marcus Reynolds",
    title: "CTO at Nexus Trade Systems",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "We needed an AI agent that could parse SEC filings without hallucinating. Alvaro didn't just tweak a model; he engineered a robust RAG architecture that outperformed our vendor solutions by 40%.",
    name: "Elena Rodriguez",
    title: "VP of Data Science at QuantAI",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "It is rare to see this level of precision in both UI engineering and econometric rigor. Alvaro doesn't just build software; he builds valid, high-performance analytical tools.",
    name: "James Thornton",
    title: "Director of Research at PolicyMetrics",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-200 h-200 bg-primary/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            What People Say
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Kinds Words from{" "}
            <span className="font-serif italic font-normal text-white">
              amazing people
            </span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-x-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].title}
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft className="w-8 h-8 text-primary-foreground hover:text-primary transition-colors" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={next}
              >
                <ChevronRight className="w-8 h-8 text-primary-foreground hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
