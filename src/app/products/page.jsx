import ProductCard from "../components/ProductCard";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: 'force-cache',
  });
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();

  return (
    <div>
      <h1>Products : {products.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
