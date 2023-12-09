import React from "react";
import avtar from "../Component/Image/sumit_image_passport.jpg";
const Hero = () => {
  return (
    <>
      <div>
        <img className="wd w-[200px] mx-auto" src={avtar} alt="" />
        <p className="font-bold text-center text-[50px] max-md:text-[35px] pt-[80px]">
          Full Stack Developer - Sumit Soni
        </p>
        <p className="text-center font-medium font-serif pt-3 text-[20px]">
          Walking on water and developing software from a specification are easy
          if both are frozen
        </p>
      </div>
    </>
  );
};

export default Hero;
