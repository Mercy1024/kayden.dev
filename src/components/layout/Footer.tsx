import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 mt-20 border-t border-border">
      <div className="container-blog">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-serif text-xl font-medium">
              Kayden
            </Link>
            <p className="mt-2 text-muted-foreground text-sm">
              A minimalist blog focused on personal insights.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-foreground/70 hover:text-foreground transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="text-foreground/70 hover:text-foreground transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-foreground/70 hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="text-foreground/70 hover:text-foreground transition-colors">
              <Facebook size={18} />
            </a>
            <a href="mailto:hello@example.com" aria-label="Email" className="text-foreground/70 hover:text-foreground transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Kayden. All rights reserved.
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            <Link to="/archive" className="text-muted-foreground hover:text-foreground transition-colors">Archive</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
