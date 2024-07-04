import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
        <img className="rounded-full h-81 w-80 outline outline-offset-0 outline-stone-500 lg:has-[400px]" src="./assets/fun.jpg" alt="" />
      </div>

      <div className="lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight">
          Host your website in less than 5 minutes
        </h1>
        <p className="font-lato text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta
          voluptas corporis? Laboriosam rerum nesciunt asperiores nemo quasi
          dolorum temporibus?
        </p>
        <form action="" className="flex flex-col gap-4 md:flex-row">
          <input
            className="rounded-md px-4 py-3 placeholder:text-gray-400 lg:w-full"
            type="email"
            placeholder="Enter email address"
          />
          <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white lg:w-96">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-2 ">
          <img className="inline-block h-6 w-6 rounded-full ring-2 leading-3"  src="./assets/check.png" alt="" />
          <p className="font-lato text-gray-400">
            No spam, ever. Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
