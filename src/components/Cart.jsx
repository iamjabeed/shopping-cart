import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const handleRemoveItem = (productId) => {
    dispatch(removeItem(productId));
  };
  const handleClearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="bg-gray-100">
      <h1 className=" text-center font-bold">Cart Items</h1>
      <button
        onClick={() => handleClearItems()}
        className="pt-1 pb-1 pr-3 pl-3 bg-orange-600 p-5"
      >
        Clear Cart
      </button>
      {/* <img src={product.image} alt="" /> */}
      <div className="flex flex-wrap justify-between items-center p-10  bg-gray-100">
        {cartItems.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-wrap justify-between items-center flex-col p-4 bg-white mb-10"
            >
              <img src={product?.image} alt="img" className="h-20 w-20" />
              <h1 className="font-bold">$ {product?.price}</h1>
              <h1>{product?.category}</h1>
              <button
                onClick={() => handleRemoveItem(product.id)}
                className="bg-red-400 pt-1 pb-1 pr-3 pl-3 mt-2 rounded-sm"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
