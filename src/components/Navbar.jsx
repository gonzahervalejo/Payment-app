import React from "react";
import logo from "../assets/img/logo.png";
import ButtonPrimary from "./ButtonPrimary";

const Navbar = () => {
  return (
    <div className="flex justify-around items-center">
      <img className="mt-10 ml-48" src={logo} alt="logo de la app" />
      <ul className="flex flex-row gap-12 mt-10 ml-56 text-primary">
        <li>About Us</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <ButtonPrimary text="LOGIN" className="mr-48 mt-10 bg-primary" />
    </div>
  );
};

export default Navbar;
