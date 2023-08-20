import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import headerImage from "/public/header-image.webp";
import Featured1 from "/public/Featured1.webp";
import Featured2 from "/public/Featured2.webp";
import Featured3 from "/public/Featured3.webp";
import Featured4 from "/public/Featured4.webp";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col justify-between gap-16 lg:flex-row my-8">
      {/* Left Div for Content */}
      <div className="flex flex-col justify-between py-8 px-0 lg:pt-12 lg:pb-4 flex-1">
        <div className="flex flex-col justify-center gap-8 mb-8 md:mb-12 md:gap-10 lg:gap-10">
          <Badge className="rounded text-lg font-semibold h-[40px] w-[120px] flex justify-center items-center bg-[#e1edff] text-[#0000FF]">
            Sale 70%
          </Badge>
          <h1 className="text-5xl font-bold md:text-[3.5rem] lg:text-[3.5rem] leading-[55px] tracking-[0.03em]">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-6 w-full sm:w-[65%] md:w-[65%] lg:w-[75%] xl:w-[55%] font-normal text-base text-[#666]">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </p>
          <Button className="flex justify-center gap-2 p-4 bg-[#212121] text-white text-base font-semibold leading-[18px] w-4/5 sm:w-2/5 md:w-2/5 lg:w-[55%]">
            <ShoppingCart /> Start Shopping
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <Image
            src={Featured1}
            alt="Featured1"
            className="w-[100px] h-[35px]"
          />
          <Image
            src={Featured2}
            alt="Featured2"
            className="w-[100px] h-[35px]"
          />
          <Image
            src={Featured3}
            alt="Featured3"
            className="w-[100px] h-[35px]"
          />
          <Image
            src={Featured4}
            alt="Featured4"
            className="w-[100px] h-[35px]"
          />
        </div>
      </div>
      {/* Right Div for Image */}
      <div className="hidden lg:flex lg:items-center 2xl:justify-center flex-1">
        <div className="xl:w-[600px] xl:h-[600px] mt-9 rounded-full bg-[#ffece3] lg:w-[460px] lg:h-[460px]">
          <Image
            src={headerImage}
            alt="Header-Image"
            className="absolute -mt-9 xl:w-[650px] xl:h-[650px] lg:w-[510px] lg:h-[510px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
