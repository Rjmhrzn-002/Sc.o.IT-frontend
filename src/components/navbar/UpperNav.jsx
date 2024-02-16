import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const UpperNav = () => {
  return (
    <>
      <div className="w-full bg-zinc-200 ">
        <div className="flex items-center justify-between max-w-[1280px] md:mx-24">
          <div>📞 Call us: +977 9876543210</div>
          <div className="flex items-center gap-4">
            <FaInstagram></FaInstagram>
            <FaFacebook></FaFacebook>
            <FaTwitter></FaTwitter>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperNav;
