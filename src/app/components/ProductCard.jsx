import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-10 pt-10">
        <Image
          src={product.image}
          width={300}
          height={300}
          alt="product iamge"
        ></Image>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="flex   gap-20">
          <p>Price: {product.price}</p>
          <p>Category: {product.category}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
