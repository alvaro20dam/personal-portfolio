import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highLights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
  },
  {
    icon: Rocket,
    title: "Backend Development",
    description:
      "Developing robust and scalable server-side applications with modern technologies.",
  },
  {
    icon: Users,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces with a focus on user experience.",
  },
  {
    icon: Lightbulb,
    title: "Innovations in CI/CD",
    description:
      "Implementing continuous integration and deployment pipelines for efficient development workflows.",
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
              Building The Future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Software Engineer driven by the art of crafting seamless
                digital experiences. With a specialized focus on the React
                ecosystem, I bridge the gap between functional logic and elegant
                design. Whether I'm architecting a robust inventory system or
                fine-tuning the animations of a modern web dashboard, I approach
                every project with a builder’s mindset—prioritizing performance,
                scalability, and an intuitive user journey using tools like
                Vite, Tailwind CSS, and TypeScript.
              </p>
              <p>
                My technical toolkit is versatile and constantly expanding.
                While I excel in frontend development, my expertise extends to
                the backend with Node.js, Express, and PostgreSQL. Beyond
                traditional web architecture, I possess a deep passion for the
                future of tech: data science and Artificial Intelligence. I
                actively experiment with Python, machine learning algorithms,
                and AI agents, allowing me to view web development not just as
                code, but as a medium for intelligent, data-driven solutions.
              </p>
              <p>
                I believe that great software is born at the intersection of
                strong technology and real-world understanding. My curiosity
                about economics and complex systems informs my perspective on
                value and efficiency, ensuring that the solutions I build solve
                actual business problems. I am currently open to collaborating
                on ambitious projects where I can leverage my full-stack
                capabilities to turn complex ideas into refined, deployable
                products.
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
