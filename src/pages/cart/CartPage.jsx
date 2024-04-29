// import CartItemCard from "../../components/card/CartItemCard";
import AddToCart from "../../components/card/addToCart";

const CartPage = () => {
  const cartItemIds = JSON.parse(localStorage.getItem("cartItem"));

  return (
    <main className="w-full p-4">
      <section className="max-w-[1340px] mx-auto flex flex-col gap-3 justify-center items-center">
        {!cartItemIds && (
          <p className="italic text-slate-600 text-center text-[24px] font-[500] my-48">
            You have 0 items in your cart
          </p>
        )}
        {cartItemIds && (
          <h1 className="text-center font-semibold text-xl underline">
            My Cart
          </h1>
        )}

        {cartItemIds?.map((item) => {
          return <AddToCart item={item} key={item} />;
        })}
      </section>
    </main>
  );
};

export default CartPage;
