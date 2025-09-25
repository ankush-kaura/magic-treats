import { useState } from 'react';
import { Menu, X, ShoppingCart, Phone } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  onCategoryClick?: (category: string) => void;
}

export function Header({ onCategoryClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Cakes', href: '#cakes', category: 'cakes' },
    { name: 'Chocolates', href: '#chocolates', category: 'chocolates' },
    { name: 'Bakery', href: '#bakery', category: 'bakery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.category && onCategoryClick) {
      onCategoryClick(item.category);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */ }
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Magic T-Treats</h1>
          </div>

          {/* Desktop Navigation */ }
          <nav className="hidden md:flex space-x-8">
            { navItems.map((item) => (
              <button
                key={ item.name }
                onClick={ () => handleNavClick(item) }
                className="text-gray-700 hover:text-primary transition-colors duration-200"
              >
                { item.name }
              </button>
            )) }
          </nav>

          {/* Action Buttons */ }
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </Button>
            <Button size="sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Order Now
            </Button>
          </div>

          {/* Mobile menu button */ }
          <div className="md:hidden">
            <button
              onClick={ () => setIsMenuOpen(!isMenuOpen) }
              className="text-gray-700 hover:text-primary"
            >
              { isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" /> }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */ }
        { isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              { navItems.map((item) => (
                <button
                  key={ item.name }
                  onClick={ () => handleNavClick(item) }
                  className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors duration-200 w-full text-left"
                >
                  { item.name }
                </button>
              )) }
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us
                </Button>
                <Button size="sm" className="w-full">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        ) }
      </div>
    </header>
  );
}