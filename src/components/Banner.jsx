import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import PhoneBanner from "./PhoneBanner";

const Banner = () => {
  return (
    <div className="bg-banner flex justify-center max-h-min ml-24 mr-24 mt-10 rounded-3xl">
      <div className="w-full md:w-1/2 flex flex-col gap-10 items-center	">
        <h1 className="text-4xl md:text-7xl text-center font-semibold mt-20">
          Ready To Launch Your Online{" "}
          <span className="flex-shrink-0 text-white">Payment </span> App
        </h1>
        <p className="text-2xl">
          A Simple Yet Modern Solution To Showcase Your App
        </p>
        <ButtonPrimary text="GET STARTED" className="bg-primary" />
        <PhoneBanner />
      </div>
    </div>
  );
};

export default Banner;
