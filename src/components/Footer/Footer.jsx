import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-screen bg-primary  text-white rounded-tr-3xl cursor-default">
        <div className="max-w-[1280px] mx-auto flex flex-col px-2">
          <div className="flex items-start py-20 ">
            {/* Company-logo */}
            <div className="text-left px-20 bg-red-500">
              <h1 className="font-extrabold text-4xl uppercase text-secondary cursor-pointer">
                LOGO
              </h1>
              <p className="font-semibold text-lg uppercase">XYZ-XXX Company</p>
            </div>
            {/* Footer-nav */}
            <div className=" flex-1 flex items-start justify-evenly font-semibold  ">
              <ul className="cursor-pointer">
                <li>Themes Tweeks</li>
                <li>Weekly Themes</li>
                <li>Raise a ticket</li>
                <li>Showcase</li>
              </ul>
              <ul className="cursor-pointer">
                <li>Services</li>
                <li>Pre-Sale FAQS</li>
                <li>Showcase</li>
              </ul>
              <ul className="cursor-pointer">
                <li>Weekly Themes</li>
                <li>Webkit-tools</li>
                <li>Support</li>
                <li>Showcase</li>
              </ul>
              <ul className="cursor-pointer">
                <li>About us</li>
                <li>Contact us</li>
                <li>Pre-Sale FAQS</li>
                <li>Affiliations</li>
                <li>Resources</li>
              </ul>
            </div>
          </div>
          {/* Division line */}
          <div className="w-full h-[2px] bg-zinc-200 "></div>
          {/* Socials-copywrite */}
          <div className="mx-auto flex flex-col items-center py-12 gap-5">
            <div className="flex gap-8 text-xl ">
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaInstagram className=""></FaInstagram>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaFacebook className=""></FaFacebook>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaTwitter className=""></FaTwitter>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaGoogle className=""></FaGoogle>
              </div>
              <div className="border rounded-full hover:scale-125 hover:cursor-pointer transition-all p-2 ">
                <FaLinkedin className=""></FaLinkedin>
              </div>
            </div>
            {/* Copywrite text */}
            <div className="text-secondary font-semibold">
              {new Date().getFullYear()} &copy; Copyright. All rights reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
