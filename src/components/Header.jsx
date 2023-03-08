import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center pr-10 pl-10 bg-gray-100">
      <img
        src="https://img.icons8.com/color/2x/redux.png"
        alt="logo"
        className="w-18"
      />
      <ul className="flex justify-between items-center gap-4 cursor-pointer ">
        <li className="font-bold uppercase text-purple-600">
          {" "}
          <Link to={"/"}>Home</Link>
        </li>

        <li className="flex justify-between items-center">
          <Link to={"/cart"}>
            <img
              src="https://img.icons8.com/ios/2x/shopping-cart.png"
              alt="cart"
              className="w-8 text-purple-600"
            />{" "}
          </Link>
          2
        </li>
      </ul>
    </div>
  );
};

export default Header;
