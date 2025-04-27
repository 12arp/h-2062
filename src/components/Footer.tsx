
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-bold">5<span className="text-secondary">Vowels</span></span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering students of Bihar and Jharkhand with fluent, confident English communication skills.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Programs</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Beginner's English</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Intermediate English</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Advanced English</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Business English</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">English for Competitions</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#approach" className="text-gray-400 hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block">Patna Center:</span>
                <span className="block">123 Education Street, Patna, Bihar</span>
              </li>
              <li className="text-gray-400">
                <span className="block">Ranchi Center:</span>
                <span className="block">456 Learning Avenue, Ranchi, Jharkhand</span>
              </li>
              <li className="text-gray-400">info@5vowels.com</li>
              <li className="text-gray-400">+91 9876543210</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} 5Vowels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
