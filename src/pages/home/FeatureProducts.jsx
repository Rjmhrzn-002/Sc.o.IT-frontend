import SectionTitle from "../../components/Typography/SectionTitle";
import ProductCard from "../../components/card/ProductCard";

const FeatureProduct = () => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1280px] ">
        <SectionTitle title="Featured Products" />
        <div className=" mx-20 md:mx-auto max-w-[980px] grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => {
            return <ProductCard key={index} id={index + 1} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
