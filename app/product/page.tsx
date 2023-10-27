"use client"
import React from 'react';
import Product from '../components/Product';

type Product = {
  id: number;
  name: string;
  price:number;
  currency:string;
  category:string;
  description:string;
  noButton:boolean
};

async function getProducts(): Promise<Product[]> {
  const res = await fetch('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd');
  const data = await res.json();
  return data.products;
}

const ProductItem: React.FC<Product> = ({ id, name }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  );
}

const Products: React.FC = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    })();
  }, []);

  return(
    <div>
      {
        products.length > 0 && products.map(product => (
          <Product key={product.id} {...product} />
        ))
      }
    </div>
  );
}

export default Products;
