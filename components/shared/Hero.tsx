import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="wrapper py-16 flex-between flex-col gap-10 hero:gap-0 hero:flex-row mt-8">
      <h1 className="font-bold text-5xl sm:text-[56px]">ბლოგი</h1>
      <Image
        src="/assets/images/hero.png"
        alt="hero image"
        width={624}
        height={200}
        priority
      />
    </div>
  );
};

export default Hero;
