import Product from "@/app/components/Product";

type ProductType = {
  id: number;
  name: string;
  price: number;
  currency: string;
  category: string;
  description: string;
};

type SearchType = {
  params: {
    id: string;
  };
  searchParams: {};
};

const getProduct = async (id: number) => {
  const res = await fetch(
    "https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd"
  );
  const data = await res.json();
  const numId = Number(id);

  return data.products.find(
    (product: ProductType) => product.id === numId
  ) || null;
};

const ProductPage = async ({ params }: SearchType) => {
  const product = await getProduct(Number(params.id));
  return (
    <Product
      noButton
      id={Number(params.id)}
      name={product.name}
      price={product.price}
      currency={product.currency}
      category={product.category}
      description={product.description}
    />
  );
};

export default ProductPage;
