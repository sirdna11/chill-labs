import Product from "@/app/components/Product"


async function getProduct(id) {
    const res = await fetch('https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd');
    const data = await res.json();
    const numId = Number(id);  
    

    return data.products.find(products => products.id === numId) || null;
}


export default async function ProductPage({params}){
    const product = await getProduct(params.id)
    return (
        <Product noButton  name={product.name} price={product.price} currency={product.currency} category={product.category} description={product.description} />
    )
}