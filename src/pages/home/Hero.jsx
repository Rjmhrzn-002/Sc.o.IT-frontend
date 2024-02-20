const heroBanner = ({ bgColor }) => {
  return (
    <>
      <div className="bg-red-600 w-full h-96 max-h-[1020px] mx-auto text-center md:text-right">
        <img
          src="/public/assets/heroBanner.jpg"
          alt="heroSectionImage"
          className="h-full w-full object-contain "
          style={{ backgroundColor: bgColor }}
        />
        <div>Hello</div>
      </div>
    </>
  );
};

export default heroBanner;
