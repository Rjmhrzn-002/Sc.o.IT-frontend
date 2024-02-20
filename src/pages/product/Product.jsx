import { useEffect, useState } from "react";
import ProductCard from "../../components/card/ProductCard";
import NewProduct from "../../components/card/NewProduct";
// import Button from "../../components/button/Button";

const Product = () => {
  const [searchData, setSearchData] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setProductList(json);
        console.log(productList);
      } catch (error) {
        console.log(error);
        throw new Error(error.message);
      }
    };
    fetchData();
  }, []);

  const handlerChange = (e) => {
    setSearchData(e.target.value);
    console.log(searchData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit btn clicked");
  };
  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto my-2 flex flex-col items-center justify-center gap-4 ">
        <form
          className="px-4 p-2 my-6 bg-primary caret-primary w-full md:w-3/4 rounded-lg  flex items-center gap-2 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="py-2 px-4 outline-none flex-1 rounded-md text-md font-semibold"
            placeholder="Search for products"
            onChange={handlerChange}
          />
          {/* <Button title={Search} /> */}
        </form>
        <div className="mx-4 md:mx-auto max-w-[1080px] grid grid-cols-2 md:grid-cols-4  gap-4">
          {productList.map((product) => {
            // if (
            //   !product.title.toUpperCase().includes(searchData.toUpperCase())
            // ) {
            //   return null;
            // }

            return (
              <>
                {!product.title
                  .toUpperCase()
                  .includes(searchData.toUpperCase()) ? (
                  <></>
                ) : (
                  <NewProduct product={product} key={product.id} />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
