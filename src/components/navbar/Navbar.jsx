import { CgMenuRightAlt } from "react-icons/cg";
import { useNavigate } from "react-router";
import navdata from "./navdata.js";
import UpperNav from "./UpperNav.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full  ">
        <div>
          <UpperNav></UpperNav>
        </div>
        <div className="max-w-[1280px] mx-4 md:mx-24 h-20 flex justify-between items-center text-white ">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <div className="uppercase font-bold text-2xl tex text-primary">
              Logo
            </div>
          </div>

          <div className="hidden md:flex items-center px-8 py-2 gap-8 font-semibold bg-primary rounded-md">
            {navdata.map((nav) => (
              <div
                key={nav.id}
                className=" px-4 py-2 cursor-pointer hover:bg-white hover:rounded-md hover:text-primary"
                onClick={() => navigate(nav.path)}
              >
                {nav.title}
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <CgMenuRightAlt size={35} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
