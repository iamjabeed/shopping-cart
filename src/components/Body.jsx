import React from "react";
import { useState, useEffect } from "react";

const Body = () => {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const data = await fetch("https://fakestoreapi.com/products");
    const json = await data.json();
    setProducts(json);
    console.log(json)
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-between items-center p-10  bg-gray-100">
      {/* <h1>Happy shopping</h1> */}
      {products.map((product) => {
        return (
          <div key={product.id} className="flex flex-wrap justify-between items-center flex-col p-10 bg-white mb-10">
            <img src={product?.image} alt="img" className="h-20 w-20" />
            <h1 className="font-bold">$ {product?.price}</h1>
            <h1>{product?.category}</h1>
            <button className="bg-green-400 pt-1 pb-1 pr-3 pl-3 rounded-sm">Add to cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
