import { Routes, Route } from "react-router";
import Contact from "../pages/contactus/Contact";
import Home from "../pages/home/Home";
import Service from "../pages/Services/Service";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/service/:productId" element={<Service />}></Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
