
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="container-blog">
          <h1 className="text-3xl md:text-4xl font-serif font-medium mb-8">About Me</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Author" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div className="prose-custom">
                <h3 className="text-lg font-medium">Connect</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>Twitter: @cleanscribe</li>
                  <li>Instagram: @clean.scribe</li>
                  <li>Email: hello@cleanscribe.com</li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-2 prose-custom">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hello! I'm Alex, the writer and thinker behind Clean Scribe. I'm passionate about minimalist design, thoughtful living, and the intersection of technology and humanity.
              </p>
              
              <h2>My Story</h2>
              <p>
                With a background in design and digital media, I've always been drawn to the power of simplicity. After years of working in the tech industry, I realized that the most impactful experiences aren't the most complex ones—they're the most thoughtfully crafted.
              </p>
              
              <p>
                Clean Scribe began as a personal project to explore ideas around intentional living, minimalist design, and technology that enhances rather than distracts. It has since evolved into a space where I share essays, observations, and insights on creating a more meaningful digital and physical existence.
              </p>
              
              <h2>What I Write About</h2>
              <p>
                My writing tends to focus on several interconnected themes:
              </p>
              
              <ul>
                <li><strong>Minimalist Design</strong>: Exploring how thoughtful reduction creates more impact than endless addition.</li>
                <li><strong>Intentional Technology</strong>: Examining our relationship with digital tools and how to make it healthier.</li>
                <li><strong>Mindful Living</strong>: Considering how small, everyday choices create the texture of our lives.</li>
                <li><strong>Creative Process</strong>: Reflecting on the practice of making things in an increasingly complex world.</li>
              </ul>
              
              <h2>My Approach</h2>
              <p>
                I believe that good writing, like good design, should be invisible—it should transport you to the ideas without drawing attention to itself. My aim is to create content that respects your time and attention, offering something genuinely worth thinking about.
              </p>
              
              <p>
                Thank you for visiting Clean Scribe. I hope you find something here that resonates, challenges, or inspires.
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
