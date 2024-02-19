import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const ProductCard = ({ id }) => {
  const [product, setProduct] = useState();
  const navigate = useNavigate();

  const fetchProduct = async () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProduct();
    }, [product]);
  }, 2000);

  return (
    <>
      {product && (
        <section
          className="flex flex-col items-start w-full  shadow-lg shadow-zinc-400 rounded-lg cursor-pointer overflow-hidden"
          onClick={() => navigate(`/product/${id}`)}
        >
          <div className="p-4">
            <p className="py-1 px-3 bg-blue-800 text-white text-xs font-bold rounded-md">
              NEW
            </p>
          </div>
          <div className=" border-b-2 w-full flex justify-center h-36 p-4">
            <img src={product.image} alt="product" className="h-full" />
          </div>
          <div className="text-left p-4">
            <h2 className="font-bold text-xl uppercase line-clamp-2">
              {product.title}
            </h2>
            <p className="text-zinc-500 text-md font-semibold line-clamp-1">
              {product.description}
            </p>
            <p className="text-red-600 font-semibold ">{product.price}</p>
            <div id="rating" className="flex items-center gap-2">
              <div className="flex text-[#FFD700]">
                {Array.from({ length: 5 }, (value, index) => {
                  return <FaRegStar color="#FFD700" key={index} />;
                })}
                {/* <FaRegStar></FaRegStar>
            <FaRegStar></FaRegStar>
            <FaRegStar></FaRegStar>
            <FaRegStar></FaRegStar>
            <FaRegStar></FaRegStar> */}
              </div>
              <span>({product.rating.count})</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductCard;
