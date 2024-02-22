const Contact = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1080px] md:mx-auto mx-2  ">
        <div className="flex justify-center items-center py-24">
          <h2 className=" w-2/6 text-center uppercase font-extrabold text-4xl text-primary shadow-2xl">
            Tell us want you want to shop...
          </h2>
        </div>
        <div className="bg-black flex flex-col items-center">
          <h2 className="text-white text-xl w-max">Get in Touch</h2>
          <form className="grid grid-cols-3 gap-6 w-full bg-red-800 py-8">
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Your name"
            />
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Your name"
            />
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Your name"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
