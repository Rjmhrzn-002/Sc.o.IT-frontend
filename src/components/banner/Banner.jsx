const Banner = ({ url, bgColor }) => {
  return (
    <div className={`w-full my-12 h-96 bg-red-500 bg-${bgColor}-400`}>
      <img
        src={url}
        className="w-full max-w-[1360px] mx-auto h-full object-contain"
        alt="banner"
      />
    </div>
  );
};

export default Banner;
