import { Star, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating?: number;
  isNew?: boolean;
  isBestseller?: boolean;
  onViewDetail?: (id: string) => void;
  className?: string;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  rating = 4.5,
  isNew = false,
  isBestseller = false,
  onViewDetail,
  className = ""
}: ProductCardProps) {
  const handleViewDetail = () => {
    if (onViewDetail) {
      onViewDetail(id);
    }
  };

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 overflow-hidden ${className}`}>
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-green-500 text-white">
              New
            </Badge>
          )}
          {isBestseller && (
            <Badge variant="secondary" className="bg-orange-500 text-white">
              Bestseller
            </Badge>
          )}
        </div>

        {/* Price overlay */}
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white text-primary font-bold">
            ${price.toFixed(2)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-bold mb-2 line-clamp-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({rating})</span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button onClick={handleViewDetail} variant="outline" className="w-full group">
          <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}