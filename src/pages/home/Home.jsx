import FeatureProduct from "./FeatureProducts";
import ExploreNew from "./ExploreNew";
import Banner from "../../components/banner/banner";
import HeroBanner from "./Hero";

const Home = () => {
  return (
    <div>
      <HeroBanner bgColor="#A6C0DB" />
      <FeatureProduct />
      <Banner
        bgColor="#F9A61B"
        url="https://static.vecteezy.com/system/resources/thumbnails/004/707/493/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
      />
      <ExploreNew />
      <Banner
        bgColor="#FFFFFF"
        url="https://assets.materialup.com/uploads/6ec43bb8-d7b1-4e1d-9f44-68f7fcb817b5/attachment.jpg"
      />
    </div>
  );
};

export default Home;
