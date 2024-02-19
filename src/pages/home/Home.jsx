import FeatureProduct from "./FeatureProducts";
import ExploreNew from "./ExploreNew";
import Banner from "../../components/banner/banner";


const Home = () => {
  return (
    <>
      <div className="bg-red-600 w-full max-w-[1400px] max-h-[1020px] mx-auto text-center md:text-right">
        <img
          src="/public/assets/heroBanner.jpg"
          alt="heroSectionImage"
          className="h-full w-full object-contain "
        />
      <div className="bg-red-600 w-full max-w-[1400px] max-h-[1020px] mx-auto text-center md:text-right">
        <img
          src="/public/assets/heroBanner.jpg"
          alt="heroSectionImage"
          className="h-full w-full object-contain "
        />
      </div>
      <FeatureProduct />
      <Banner
        bgColor="zinc"
        url="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
      />
      <ExploreNew />
      <Banner
        bgColor="yellow"
        url="https://assets.materialup.com/uploads/6ec43bb8-d7b1-4e1d-9f44-68f7fcb817b5/attachment.jpg"
      />
    </>
  );
};

export default Home;
