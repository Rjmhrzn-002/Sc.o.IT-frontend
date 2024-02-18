import { useParams } from "react-router-dom";
import ProductGallery from "./ProductGallery";
import ProductDetail from "./ProfileDetail";

const ProductProfile = () => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div className="flex flex-col w-full my-2 max-w-[1280px] md:px-2 md:flex-row md:items-center  ">
        <ProductGallery></ProductGallery>
        <ProductDetail></ProductDetail>
      </div>
    </>
  );
};

export default ProductProfile;
