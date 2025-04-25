import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-12">
        <div className="container-blog">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-6">
                <img
                  src="/kaydenGhibli.jpeg"
                  alt="Author"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="prose-custom">
                <h3 className="text-lg font-medium">Connect</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>Twitter: @kolade1024</li>
                  <li>Instagram: @kolade1024</li>
                  <li>Email: kaydenmm89@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2 prose-custom">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hi there , I'm Kayden, the creator and thinker behind Clean
                Scribe. I'm passionate about thoughtful living, technology, and
                the intersection between design and personal growth.
              </p>

              <h2>My Story</h2>
              <p>
                With a background in software engineering and tutoring, I've
                always been drawn to creating with intention. Whether it's
                building websites, tutoring, or reflecting on the human
                experience, I believe the most impactful outcomes come from
                clarity and purpose.
              </p>

              <p>
                Clean Scribe began as a personal project to explore meaningful
                ideas and share insights on how we can live with more intention
                in a world that's always moving. It’s become a space where I
                reflect on my own journey as a developer, teacher, and lifelong
                learner, while also offering thoughtful essays on technology,
                design, and personal growth.
              </p>

              <h2>What I Write About</h2>
              <p>
                My writing focuses on several interconnected themes that reflect
                my values and interests:
              </p>

              <ul>
                <li>
                  <strong>Minimalist Design & Development</strong>: Exploring
                  how thoughtful simplicity leads to greater impact and clarity.
                </li>
                <li>
                  <strong>Intentional Technology</strong>: Examining our
                  relationship with digital tools and how we can use them to
                  serve our lives, not overwhelm them.
                </li>
                <li>
                  <strong>Mindful Living & Learning</strong>: Reflecting on how
                  small, conscious decisions shape the way we experience the
                  world.
                </li>
                <li>
                  <strong>Creative Process</strong>: Insights on developing
                  ideas, building projects, and creating in a noisy world.
                </li>
              </ul>

              <h2>My Approach</h2>
              <p>
                I believe that good writing, like good design, should be
                seamless and purposeful: it should take you to the ideas without
                drawing attention to the method. My goal is to create content
                that respects your time and offers something worth thinking
                about.
              </p>

              <p>
                Thanks for visiting Clean Scribe. I hope something here
                resonates with you, challenges your thinking, or inspires your
                next step.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
