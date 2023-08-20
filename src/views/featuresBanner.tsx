import Image from "next/image";
import feature from "/public/feature.webp";
import { Button } from "@/components/ui/button";

const FeaturesBanner = () => {
  return (
    <section className="lg:mt-16">
      <div className="flex justify-center xl:justify-end py-8 lg:pb-8 bg-my-linear">
        <h1 className="font-bold text-[2.5rem] sm:text-[2.75rem] lg:text-[2.75rem] pb-8 text-[#212121] w-[45%] max-[1210px]:w-4/5 max-[1000px]:w-full leading-[55px] tracking-[0.03em]">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="grid grid-cols-1 max-[1024px]:gap-16 xl:grid-cols-2 sm:py-8 lg:pb-16 bg-[#fbfcff]">
        {/* Left */}
        <div className="relative grid max-[1024px]:gap-8 grid-cols-2 justify-center items-center">
          <div className="absolute font-extrabold text-[5rem] sm:text-8xl lg:text-[6.875rem] leading-[110px] text-[#212121] opacity-[.07] z-[1]">
            Different from others
          </div>
          <div className="w-full lg:w-[70%] z-[2] ">
            <h3 className="font-semibold text-lg leading-5 tracking-[.03em] pb-4 text-[#212121]">
              Using Good Quality Materials
            </h3>
            <p className="font-light sm:w-[70%] text-base leading-[22px] tracking-wider text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full lg:w-[70%] z-[2]">
            <h3 className="font-semibold text-lg leading-5 tracking-[.03em] pb-4 text-[#212121]">
              100% Handmade Products
            </h3>
            <p className="font-light sm:w-[70%] text-base leading-[22px] tracking-wider text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit
            </p>
          </div>
          <div className="w-full lg:w-[70%] z-[2]">
            <h3 className="font-semibold text-lg leading-5 tracking-[.03em] pb-4 text-[#212121]">
              Modern Fashion Design
            </h3>
            <p className="font-light sm:w-[70%] text-base leading-[22px] tracking-wider text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full lg:w-[70%] z-[2]">
            <h3 className="font-semibold text-lg leading-5 tracking-[.03em] pb-4 text-[#212121]">
              Discount for Bulk Orders
            </h3>
            <p className="font-light sm:w-[70%] text-base leading-[22px] tracking-wider text-[#212121]">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-col sm:flex-row lg:flex-row justify-center items-center gap-10">
          <Image
            src={feature}
            alt="Feature-Image"
            className="w=[300px] h-[350px]"
          />
          <div className="flex flex-col gap-8">
            <p className="font-light text-base leading-[26px] text-justify color=[#212121]">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button className="text-sm w-2/4 font-semibold leading-[18px] py-[10px] px-0 flex items-center justify-center gap-2 bg-[#212121] text-white">
              See All Products
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBanner;
