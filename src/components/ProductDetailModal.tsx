import { useState } from 'react';
import { Star, X, MessageCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ContactForm } from './ContactForm';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  detailedDescription?: string;
  ingredients?: string[];
  servingSize?: string;
  weight?: string;
}

interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  const [showContactForm, setShowContactForm] = useState(false);

  if (!product) return null;

  const handleContactNow = () => {
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const handleFormSubmit = (formData: any) => {
    // For now, just show a success message
    // Backend integration will be handled later
    console.log('Form submitted:', { ...formData, productId: product.id });
    setShowContactForm(false);
    onClose();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span>{product.name}</span>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            {/* Product Image */}
            <div className="relative">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-80 md:h-96 object-cover rounded-lg"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && (
                  <Badge variant="secondary" className="bg-green-500 text-white">
                    New
                  </Badge>
                )}
                {product.isBestseller && (
                  <Badge variant="secondary" className="bg-orange-500 text-white">
                    Bestseller
                  </Badge>
                )}
              </div>
              
              {/* Price */}
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-white text-primary font-bold text-lg px-3 py-1">
                  ${product.price.toFixed(2)}
                </Badge>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating || 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">({product.rating || 0})</span>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
              </div>

              {/* Additional Details */}
              {(product.ingredients || product.servingSize || product.weight) && (
                <div className="space-y-3">
                  {product.ingredients && (
                    <div>
                      <h4 className="font-semibold mb-1">Ingredients</h4>
                      <p className="text-sm text-muted-foreground">
                        {product.ingredients.join(', ')}
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {product.servingSize && (
                      <div>
                        <span className="font-semibold">Serving Size:</span>
                        <p className="text-muted-foreground">{product.servingSize}</p>
                      </div>
                    )}
                    {product.weight && (
                      <div>
                        <span className="font-semibold">Weight:</span>
                        <p className="text-muted-foreground">{product.weight}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Contact Button */}
              <div className="pt-4">
                <Button onClick={handleContactNow} className="w-full" size="lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Now
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Get in touch for custom orders, pricing, or special requests
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={showContactForm}
        onClose={handleCloseContactForm}
        onSubmit={handleFormSubmit}
        productName={product.name}
      />
    </>
  );
}