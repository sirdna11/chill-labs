import React from 'react';
import { useRouter } from 'next/navigation';

interface ProductButtonProps {
  id: string | number;
}

const ProductButton: React.FC<ProductButtonProps> = ({ id }) => {
  const router = useRouter();

  function handleClick() {
    router.push(`/product/${id}`);
  }

  return (
    <div>
      <button onClick={handleClick}>Go to product</button>
    </div>
  );
}

export default ProductButton;
