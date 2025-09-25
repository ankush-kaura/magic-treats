import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductDetailModal, type Product } from './components/ProductDetailModal';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { toast } from 'sonner@2.0.3';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample product data
  const cakes: Product[] = [
    {
      id: 'cake-1',
      name: 'Chocolate Paradise Cake',
      description: 'Rich chocolate layers with premium cocoa and smooth buttercream frosting',
      detailedDescription: 'Our signature Chocolate Paradise Cake features three layers of moist chocolate sponge cake made with premium Belgian cocoa. Each layer is filled with silky smooth chocolate buttercream and topped with a glossy chocolate ganache. Perfect for chocolate lovers and special celebrations.',
      price: 45.99,
      image: 'https://images.unsplash.com/photo-1646082192921-272df4780996?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlcyUyMGJha2VyeXxlbnwxfHx8fDE3NTg3NzczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      isBestseller: true,
      ingredients: ['Premium Belgian cocoa', 'Fresh eggs', 'Organic flour', 'Pure vanilla extract', 'Heavy cream', 'Belgian chocolate'],
      servingSize: '8-10 people',
      weight: '2.5 lbs'
    },
    {
      id: 'cake-2',
      name: 'Birthday Celebration Cake',
      description: 'Colorful vanilla cake with rainbow sprinkles and festive decorations',
      detailedDescription: 'Make every birthday extra special with our festive Birthday Celebration Cake. Features layers of moist vanilla sponge cake with rainbow sprinkles baked right in, filled with creamy vanilla buttercream, and decorated with colorful frosting and festive decorations.',
      price: 35.99,
      image: 'https://images.unsplash.com/photo-1753742731319-70f5c9908b6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGNha2UlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTg3NzczOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.6,
      isNew: true,
      ingredients: ['Organic flour', 'Fresh eggs', 'Pure vanilla extract', 'Rainbow sprinkles', 'Butter', 'Powdered sugar'],
      servingSize: '6-8 people',
      weight: '2 lbs'
    },
    {
      id: 'cake-3',
      name: 'Elegant Wedding Cake',
      description: 'Multi-tier wedding cake with delicate floral decorations and premium ingredients',
      detailedDescription: 'Create unforgettable memories with our Elegant Wedding Cake. This stunning multi-tier masterpiece features layers of vanilla and chocolate sponge cake with your choice of fillings, covered in smooth fondant and decorated with delicate sugar flowers and elegant piping.',
      price: 125.99,
      image: 'https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzU4NzEyMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      ingredients: ['Premium fondant', 'Fresh eggs', 'Organic flour', 'Pure vanilla extract', 'Fresh cream', 'Sugar flowers'],
      servingSize: '50-60 people',
      weight: '8 lbs'
    },
    {
      id: 'cake-4',
      name: 'Assorted Cupcakes',
      description: 'Box of 12 gourmet cupcakes with various flavors and decorative toppings',
      detailedDescription: 'Our Assorted Cupcakes box features 12 beautifully decorated cupcakes in four different flavors: vanilla bean, chocolate fudge, red velvet, and lemon zest. Each cupcake is topped with premium buttercream frosting and decorative elements.',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1587404965988-26fb86a96173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMHZhcmlldHl8ZW58MXx8fHwxNzU4Nzc3MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      isBestseller: true,
      ingredients: ['Organic flour', 'Fresh eggs', 'Cocoa powder', 'Cream cheese', 'Lemon zest', 'Food coloring'],
      servingSize: '12 cupcakes',
      weight: '1.5 lbs'
    }
  ];

  const chocolates: Product[] = [
    {
      id: 'choc-1',
      name: 'Artisan Chocolate Truffles',
      description: 'Hand-crafted dark chocolate truffles with premium cocoa and unique flavor infusions',
      detailedDescription: 'Our Artisan Chocolate Truffles are hand-rolled and crafted with 70% Belgian dark chocolate. Each truffle features a smooth ganache center infused with unique flavors including raspberry, espresso, sea salt caramel, and lavender honey.',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1621134283184-5e7881013013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY2hvY29sYXRlc3xlbnwxfHx8fDE3NTg3NzczMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.9,
      isBestseller: true,
      ingredients: ['Belgian dark chocolate', 'Heavy cream', 'Raspberry puree', 'Espresso', 'Sea salt', 'Lavender honey'],
      servingSize: '12 pieces',
      weight: '0.5 lbs'
    },
    {
      id: 'choc-2',
      name: 'Colorful Macarons',
      description: 'Delicate French macarons in assorted flavors with smooth ganache filling',
      detailedDescription: 'Our authentic French Macarons are made using traditional techniques with almond flour and aged egg whites. Each box contains 12 macarons in six flavors: vanilla, chocolate, strawberry, pistachio, lavender, and salted caramel.',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1702745573186-abd6f7b6443c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNhcm9ucyUyMGNvbG9yZnVsfGVufDF8fHx8MTc1ODc3NzM5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.8,
      isNew: true,
      ingredients: ['Almond flour', 'Aged egg whites', 'Powdered sugar', 'Food coloring', 'Various ganache fillings'],
      servingSize: '12 pieces',
      weight: '0.4 lbs'
    }
  ];

  const bakeryItems: Product[] = [
    {
      id: 'bakery-1',
      name: 'Fresh Croissants',
      description: 'Buttery, flaky croissants baked fresh every morning with authentic French technique',
      detailedDescription: 'Our Fresh Croissants are made using traditional French lamination techniques, creating 81 layers of butter and dough. Each croissant is hand-shaped and baked to golden perfection, resulting in a crispy exterior and tender, flaky interior.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1712265964668-df895627adaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGNyb2lzc2FudHMlMjBiYWtlcnl8ZW58MXx8fHwxNzU4Nzc3MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4.7,
      isBestseller: true,
      ingredients: ['French flour', 'European butter', 'Fresh yeast', 'Sea salt', 'Milk'],
      servingSize: '6 croissants',
      weight: '1 lb'
    }
  ];

  // Find all products in one array for easy lookup
  const allProducts = [...cakes, ...chocolates, ...bakeryItems];

  const handleViewDetail = (productId: string) => {
    const product = allProducts.find(p => p.id === productId);
    if (product) {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // Smooth scroll to the category section
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderClick = () => {
    toast.success('Redirecting to order page...', {
      description: 'You will be redirected to our online ordering system.',
    });
  };

  return (
    <div className="min-h-screen">
      <Header onCategoryClick={handleCategoryClick} />
      
      <main>
        <section id="home">
          <Hero onOrderClick={handleOrderClick} />
        </section>

        <section id="cakes" className="scroll-mt-16">
          <CategorySection
            title="Delicious Cakes"
            description="From birthday celebrations to elegant weddings, our cakes are crafted to make every moment special."
            products={cakes}
            onViewDetail={handleViewDetail}
          />
        </section>

        <section id="chocolates" className="scroll-mt-16 bg-muted/30">
          <CategorySection
            title="Premium Chocolates"
            description="Indulge in our handcrafted chocolates and macarons, made with the finest ingredients and traditional techniques."
            products={chocolates}
            onViewDetail={handleViewDetail}
          />
        </section>

        <section id="bakery" className="scroll-mt-16">
          <CategorySection
            title="Fresh Bakery Items"
            description="Start your day with our freshly baked breads, pastries, and croissants made with time-honored recipes."
            products={bakeryItems}
            onViewDetail={handleViewDetail}
          />
        </section>

        <section id="about" className="scroll-mt-16">
          <About />
        </section>
      </main>

      <Footer />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}