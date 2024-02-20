const Banner = ({ url, bgColor }) => {
  return (
    <div className="w-full min-w-[2460px]   my-12 h-96 ">
      <img
        src={url}
        className={`w-full mx-auto  h-full object-contain `}
        alt="banner"
        style={{ backgroundColor: bgColor }}
      />
    </div>
  );
};

export default Banner;
