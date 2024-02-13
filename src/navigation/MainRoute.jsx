import { Routes, Route } from "react-router";
import Contact from "../pages/contactus/Contact";
import Home from "../pages/home/Home";
import Service from "../pages/Services/Service";
import Footer from "../components/Footer/Footer";
import ProductProfile from "../pages/product/ProductProfile";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service/:productId" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductProfile />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
