import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { Menu, X } from 'lucide-react';

const NavItem = ({ to, label }: { to: string; label: string }) => (
  <li>
    <Link 
      to={to} 
      className="text-foreground/80 hover:text-foreground transition-colors duration-200"
    >
      {label}
    </Link>
  </li>
);

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-6 border-b border-border">
      <nav className="container-blog flex justify-between items-center">
        <div>
          <Link to="/" className="font-serif text-2xl font-medium">
            Clean Scribe
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="block md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            <NavItem to="/" label="Home" />
            <NavItem to="/about" label="About" />
            <NavItem to="/archive" label="Blog" />
            <NavItem to="/contact" label="Contact" />
          </ul>
          <ThemeToggle />
        </div>
      </nav>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-background border-b border-border z-50">
          <div className="container-blog py-4">
            <ul className="flex flex-col space-y-4">
              <NavItem to="/" label="Home" />
              <NavItem to="/about" label="About" />
              <NavItem to="/archive" label="Blog" />
              <NavItem to="/contact" label="Contact" />
            </ul>
            <div className="mt-4 flex justify-between items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
