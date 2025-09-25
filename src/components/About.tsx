import { Clock, Users, Award, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  className?: string;
}

export function About({ className = "" }: AboutProps) {
  const features = [
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "All our products are baked fresh every morning using traditional recipes"
    },
    {
      icon: Users,
      title: "Family Recipe",
      description: "Passed down through generations, our recipes bring authentic flavors to life"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest ingredients sourced from trusted local suppliers"
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every item is crafted with passion and attention to detail by our skilled bakers"
    }
  ];

  return (
    <section className={ `py-16 bg-muted/50 ${className}` }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */ }
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Sweet Story
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over 25 years, Magic T-Treats has been the heart of our community,
              bringing families together with the irresistible aroma of freshly baked goods.
              Our journey began with a simple mission: to create moments of joy through
              exceptional pastries, cakes, and chocolates.
            </p>

            {/* Features Grid */ }
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              { features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={ index } className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{ feature.title }</h3>
                      <p className="text-sm text-muted-foreground">{ feature.description }</p>
                    </div>
                  </div>
                );
              }) }
            </div>
          </div>

          {/* Image */ }
          <div className="lg:order-first">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1692448971346-2433e35d50d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBzdG9yZWZyb250fGVufDF8fHx8MTc1ODc3NzMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Magic T-Treats Bakery"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}