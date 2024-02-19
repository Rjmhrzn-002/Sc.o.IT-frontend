const Banner = ({ url }) => {
  return (
    <div className="w-full max-w-[1360px] mx-auto my-12 h-96">
      <img src={url} className="w-full h-full object-contain" alt="banner" />
    </div>
  );
};

export default Banner;
