import { FaRegStar, FaStar } from "react-icons/fa";

const ProductCard = () => {
  return (
    <section className="flex flex-col items-start w-96  shadow-2xl shadow-zinc-900 rounded-lg overflow-hidden">
      <div className="p-4">
        <p className="py-1 px-3 bg-blue-800 text-white text-xs font-bold rounded-md">
          NEW
        </p>
      </div>
      <div className="flex-1 border-b-2 w-full flex justify-center">
        <img
          src="data:image/jpeg;base64,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"
          alt="product"
          className="h-full bg-cyan-500"
        />
      </div>
      <div className="text-left p-4">
        <h2 className="font-bold text-2xl uppercase line-clamp-2">
          Headphones Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Veritatis, molestias!
        </h2>
        <p className="text-zinc-500 text-lg font-semibold">Description</p>
        <p className="text-red-600 font-semibold">price</p>
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
          <span>(8.5)</span>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
