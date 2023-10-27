import React from 'react';
import ProductButton from './ProductButton';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
  noButton: boolean;
}

const Product: React.FC<ProductProps> = ({
  id, 
  name, 
  price, 
  currency, 
  category, 
  description, 
  noButton = false,
}) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="bg-white shadow-xl rounded-lg p-5 max-w-md border-yellow-500 border-2">
      
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-lg text-blue-600 mb-2">{price} {currency}</p>
        <p className="text-md text-gray-700 italic mb-2">{category}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        {
            !noButton && <ProductButton id={id} />
        }
    </div>
</div>
  );
}

export default Product;
