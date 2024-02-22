import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import Button from "../../components/button/Button";
const Contact = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1280px] mx-2 md:mx-auto flex justify-center items-center py-24">
        <h2 className=" w-2/6 text-center uppercase font-extrabold text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary">
          Tell us want you want to shop...
        </h2>
      </div>
      <div className=" w-full bg-zinc-100 flex flex-col items-center">
        <div className=" max-w-[1280px] mx-2 md:mx-auto">
          <h2 className="w-full uppercase font-semibold text-xl text-zinc-700 ">
            Get in Touch
          </h2>
          <form className="grid grid-cols-3 gap-4 w-full py-8">
            <div className="flex items-center relative">
              <FaUser color="gray" className="absolute left-3"></FaUser>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Your name"
                className="py-2 px-10 rounded-md w-full border border-gray-500 focus:outline-2 focus:border-none"
                required
              />
            </div>
            <div className="flex items-center relative">
              <FaEnvelope color="gray" className="absolute left-3"></FaEnvelope>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
                className="py-2 px-10 rounded-md w-full border border-gray-500 focus:outline-2 focus:border-none"
                required
              />
            </div>
            <div className="flex items-center relative ">
              <FaPhone
                color="gray"
                className="absolute left-3 rotate-90"
              ></FaPhone>
              <input
                type="text"
                name="fullName"
                id="mobile"
                placeholder="Your mobile"
                className="py-2 px-10 rounded-md w-full border border-gray-500 focus:outline-2 focus:border-none"
                required
              />
            </div>
            <div className="col-span-2">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full p-4 rounded-md border border-gray-500 focus:outline-2 focus:border-none"
              ></textarea>
            </div>
            <Button title="Submit"></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
