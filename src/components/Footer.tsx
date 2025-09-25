import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  className?: string;
}

export function Footer({ className = "" }: FooterProps) {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Catering", href: "#catering" },
    { name: "Special Orders", href: "#orders" },
    { name: "Gift Cards", href: "#gifts" }
  ];

  const categories = [
    { name: "Wedding Cakes", href: "#wedding" },
    { name: "Birthday Cakes", href: "#birthday" },
    { name: "Cupcakes", href: "#cupcakes" },
    { name: "Pastries", href: "#pastries" },
    { name: "Chocolates", href: "#chocolates" }
  ];

  return (
    <footer className={ `bg-gray-900 text-white ${className}` }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */ }
          <div>
            <h3 className="text-2xl font-bold mb-4">Magic T-Treats</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creating sweet memories since 1998. Your neighborhood bakery
              for all occasions, big and small.
            </p>
            <div className="flex space-x-4">
              { socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={ index }
                    href={ social.href }
                    className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors duration-200"
                    aria-label={ social.label }
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              }) }
            </div>
          </div>

          {/* Quick Links */ }
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              { quickLinks.map((link, index) => (
                <li key={ index }>
                  <a
                    href={ link.href }
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    { link.name }
                  </a>
                </li>
              )) }
            </ul>
          </div>

          {/* Categories */ }
          <div>
            <h4 className="font-semibold mb-4">Our Specialties</h4>
            <ul className="space-y-2">
              { categories.map((category, index) => (
                <li key={ index }>
                  <a
                    href={ category.href }
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    { category.name }
                  </a>
                </li>
              )) }
            </ul>
          </div>

          {/* Contact Info */ }
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Baker Street<br />
                  Sweet City, SC 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">(555) 123-CAKE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300">hello@sweetdelights.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 6AM - 8PM</div>
                  <div>Sat-Sun: 7AM - 9PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */ }
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Magic T-Treats. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}