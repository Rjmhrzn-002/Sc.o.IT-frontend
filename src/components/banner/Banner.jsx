<<<<<<< HEAD
const Banner = ({ url, bgColor }) => {
  return (
    <div className={`w-full my-12 h-96 bg-red-500 bg-${bgColor}-400`}>
      <img
        src={url}
        className="w-full max-w-[1360px] mx-auto h-full object-contain"
        alt="banner"
      />
=======
const Banner = ({ url }) => {
  return (
    <div className="w-full max-w-[1360px] mx-auto my-12 h-96">
      <img src={url} className="w-full h-full object-contain" alt="banner" />
>>>>>>> d5fce06cae926d11416cf181cbe47335198fd3b0
    </div>
  );
};

export default Banner;
