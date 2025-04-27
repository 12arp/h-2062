
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="container-padding mx-auto flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">5<span className="text-secondary">Vowels</span></span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#approach" className="text-gray-700 hover:text-primary transition-colors">
            Our Approach
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">
            Success Stories
          </a>
          <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </a>
          <button className="btn-primary">
            Enroll Now
          </button>
        </div>

        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md">
          <div className="container-padding py-4 flex flex-col gap-4">
            <a href="#about" className="text-gray-700 hover:text-primary py-2 transition-colors">
              About Us
            </a>
            <a href="#approach" className="text-gray-700 hover:text-primary py-2 transition-colors">
              Our Approach
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary py-2 transition-colors">
              Success Stories
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary py-2 transition-colors">
              Contact
            </a>
            <button className="btn-primary mt-2">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
