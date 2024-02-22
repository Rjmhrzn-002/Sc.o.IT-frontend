import React, { useEffect, useState } from "react";

// import ProductCard from "../../components/card/ProductCard";
import NewProduct from "../../components/card/NewProduct";
import Banner from "../../components/banner/Banner";
import Button from "../../components/button/Button";

const Product = () => {
  const [searchData, setSearchData] = useState("");
  const [productList, setProductList] = useState([]);
  // const [filteredData, setFilter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProductList(json);
        // setFilter(json);
        console.log(productList);
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    };
    fetchData();
  }, []);

  let filteredData = productList.filter((product) => {
    return product.title.toUpperCase().includes(searchData.toUpperCase());
  });

  const handlerChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit btn clicked");
  };
  // console.log(filteredData);
  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto my-2 flex flex-col items-center justify-center gap-4 ">
        <form
          className="px-4 p-2 my-6 bg-zinc-200 caret-primary w-full md:w-3/4 rounded-lg  flex items-center gap-2 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="py-2 px-4 outline-none flex-1 rounded-md text-md font-semibold"
            placeholder="Search for products"
            onChange={handlerChange}
          />
          <Button title="Search" />
        </form>
        <div className="mx-4 md:mx-auto max-w-[1080px] grid grid-cols-2 md:grid-cols-4  gap-4">
          {filteredData.map((product) => {
            return <NewProduct product={product} key={product.id} />;
          })}
        </div>
        <Banner
          bgColor="#FFFFFF"
          url="https://assets.materialup.com/uploads/6ec43bb8-d7b1-4e1d-9f44-68f7fcb817b5/attachment.jpg"
        />
      </div>
    </>
  );
};

export default Product;

// if (
//   !product.title.toUpperCase().includes(searchData.toUpperCase())
// ) {
//   return null;
// }

// {productList.slice(0, 12).map((product) => {
//             return (
//               <>
//                 {!product.title
//                   .toUpperCase()
//                   .includes(searchData.toUpperCase()) ? (
//                   <></>
//                 ) : (
//                   <NewProduct product={product} key={product.id} />
//                 )}
//               </>
//             );
//           })}
