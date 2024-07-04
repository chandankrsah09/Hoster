import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12 md:flex-row justify-between">
      <ul className="flex gap-10 font-lato text-gray-400 justify-between">
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
      <div className="flex gap-2 items-center justify-center">
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-blue"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div>
          <p className="font-playfair font-thin">Have any Question?</p>
          <a href="#" className="font-lato font-medium">Talk to a specialist.</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
