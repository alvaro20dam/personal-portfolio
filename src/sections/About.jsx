import { Code2, Brain, LineChart, Globe } from "lucide-react";

const highLights = [
  {
    icon: LineChart,
    title: "Econometric Analysis",
    description:
      "Decoding market dynamics and monetary policy through rigorous quantitative modeling.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Developing intelligent agents and predictive models to automate complex research.",
  },
  {
    icon: Code2,
    title: "Full-Stack Architecture",
    description:
      "Building scalable platforms to process, visualize, and interact with economic data.",
  },
  {
    icon: Globe,
    title: "Global Strategy",
    description:
      "Applying data-driven insights to solve challenges in international commerce and business.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Modeling the Future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one algorithm at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Computational Economist and AI Researcher operating at
                the intersection of macroeconomic theory and advanced
                technology. Unlike traditional analysts, I possess the
                engineering capability to not only derive insights but to build
                the very systems that process them. My work focuses on decoding
                complex dynamics in monetary policy, international commerce, and
                business strategy using rigorous econometrics and machine
                learning.
              </p>
              <p>
                My technical approach is multidisciplinary. I leverage a
                full-stack background (React, Node.js, TypeScript) to architect
                scalable analytical platforms, while utilizing Python and AI
                agents to drive deep data analysis. I view code not merely as a
                way to build applications, but as a medium to construct robust
                computational frameworks that solve real-world economic
                challenges.
              </p>
              <p>
                Driven by the conviction that innovation requires continuous
                evolution, I maintain a relentless focus on learning. In the
                rapidly shifting landscapes of AI and global markets, I
                constantly assimilate emerging methodologies—from advanced deep
                learning architectures to the latest econometric models—ensuring
                my work always remains at the cutting edge of the field.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "With a unique perspective on complex systems and efficiency, I
                look past the syntax to understand the 'why' behind the code."
              </p>
            </div>
          </div>

          {/*Right Column - Highlights*/}
          <div className="grid sm:grid-col-2 gap-6">
            {highLights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};
