import { ProductCard } from './ProductCard';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface CategorySectionProps {
  title: string;
  description?: string;
  products: Product[];
  onViewDetail?: (id: string) => void;
  className?: string;
}

export function CategorySection({
  title,
  description,
  products,
  onViewDetail,
  className = ""
}: CategorySectionProps) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onViewDetail={onViewDetail}
              className="h-full"
            />
          ))}
        </div>

        {/* Show more button */}
        {products.length > 0 && (
          <div className="text-center mt-12">
            <button className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200 rounded-lg">
              View All {title}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}