import Product from "@/components/product/Product";

const getProducts= async ()=>{
    const res= await fetch('http://localhost:5000/products',{next: {revalidate : 10}});//{cache: 'no-store'/'force-cache'}
    return res.json()
}

const ProductPage = async () => {
    const products = await getProducts();

    return (
        <div >
            <h1>products : {products.length}</h1>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default ProductPage;