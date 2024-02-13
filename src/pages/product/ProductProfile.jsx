import { useState } from "react";

const ProductProfile = () => {
  const imgs = [
    {
      id: 1,
      url: "https://i.pinimg.com/736x/11/f8/2e/11f82e1961f0bdc6c649ff4f60128556.jpg",
    },
    {
      id: 2,
      url: "https://i.pinimg.com/564x/3a/49/4d/3a494d524972da7e114982913ac183c9.jpg",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/236x/18/1e/99/181e9926b043590e0b3d72947bc53073.jpg",
    },
    {
      id: 4,
      url: "https://i.pinimg.com/236x/08/08/d3/0808d354c5ccf277cf815d774d22c967.jpg",
    },
  ];

  const [activeImg, setImage] = useState(0);
  // const activeCss = "border-2 border-blue-500 ";
  return (
    <>
      <div className=" flex flex-col w-md bg-red-300 items-center gap-4 p-4">
        <div className="w-xs h-xs bg-amber-700 overflow-hidden rounded-md">
          <img src={imgs[activeImg].url} alt="Image" className="w-full" />
        </div>
        <div className=" flex justify-evenly gap-3">
          {imgs.map((img, index) => {
            return (
              <div
                key={index}
                className={`w-full h-full rounded-md overflow-hidden object-contain cursor-pointer hover:scale-110 transition duration-200  ${
                  index === activeImg
                    ? "border-2 border-blue-500 "
                    : "opacity-60 "
                }`}
                onClick={() => setImage(index)}
              >
                <img
                  src={img.url}
                  alt="img"
                  className="w-full h-full rounded-md object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductProfile;
