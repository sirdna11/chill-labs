"use client"
import { Hero, SearchBar } from '@/app/components';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    fetch('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setFilteredProducts(data.products);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => {
      const isCategoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const isNameMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return isCategoryMatch && isNameMatch;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, products]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const categories = Array.from(new Set(products.map(product => product.category)));

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Product Catalog</h1>
          <p>Explore products you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar onSearch={setSearchQuery} />
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="ml-4 px-2 py-1 border rounded"
          >
            <option value="All">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="products-list mt-8">
          {currentProducts.map(product => (
            <Link key={product.id} href={`/product/${product.id}`} className="block mb-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out rounded p-4">
              <h3 className="product-name text-xl font-semibold mb-2">{product.name}</h3>
              <p className="product-price text-lg text-blue-600 mb-2">{product.price} {product.currency}</p>
              <p className="product-category text-gray-600 italic">{product.category}</p>
            </Link>
          ))}
        </div>
        <div className="pagination mt-8 flex space-x-4">
          {[...Array(totalPages)].map((_, index) => (
            <button 
              key={index} 
              onClick={() => handlePageChange(index + 1)}
              className={`page-number px-4 py-2 border rounded ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'text-blue-600'}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}

