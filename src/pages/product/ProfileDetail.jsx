import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, []);

  console.log(product);
  return (
    <div className=" flex-1 py-10 px-12">
      <div className="flex flex-col gap-2" key={product.id}>
        {/* Title */}
        <h1 className="text-3xl font-bold uppercase line-clamp-2 font-lexend-deca">
          {product.title}
        </h1>

        <div>
          <p className="text-lg font-semibold text-zinc-400">
            {product.category}
          </p>
          <div className="flex gap-2">
            <p className="text-primary font-semibold text-xl">
              Price: NRP {product.price}
            </p>
          </div>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, index) => {
            return <FaStar color="#FFD700" key={index} />;
          })}
          {/* <p>{product}</p> */}
        </div>
        {/* Brand */}
        <div className="w-xs">{product.description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
