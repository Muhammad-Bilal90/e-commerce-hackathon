import Image from "next/image";
import eventLeft from "/public/event-left.webp";
import eventRight1 from "/public/event-right1.webp";
import eventRight2 from "/public/event-right2.webp";
import { Button } from "@/components/ui/button";

const Events = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col gap-4 text-center mb-8">
        <span className="font-bold text-center text-xs leading-4 tracking-widest text-[#0062f5]">
          PROMOTIONS
        </span>
        <h2 className="font-bold text-center text-[32px] leading-10 tracking-[0.03em] text-[#212121]">
          Our Promotions Events
        </h2>
      </div>
      <div className="flex justify-between flex-col gap-4 lg:gap-8 lg:flex-row">
        {/* Event left */}
        <div className="flex flex-col flex-[2_1_0%] lg:flex-1 gap-4">
          <div className="flex justify-between items-center flex-col sm:flex-row md:flex-row lg:flex-row pt-8 md:pt-0 lg:py-0 px-8 tracking-wider text-[#212121] bg-[#d6d6d8]">
            <div>
              <h3 className="font-bold text-[1.75rem] leading-[35px]">
                GET UP TO{" "}
                <span className="font-extrabold text-4xl leading-[45px]">
                  60%
                </span>
              </h3>
              <p className="font-normal text-lg leading-6 tracking-[0.03em]">
                For the summer season
              </p>
            </div>
            <Image
              src={eventLeft}
              alt="Event-Left"
              className="w-[260px] h-[200px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center pt-12 pb-8 px-8 text-white bg-[#212121]">
            <h3 className="font-extrabold text-4xl leading-[45px] tracking-[0.03em] mb-4">
              GET 30% Off
            </h3>
            <p className="font-normal text-sm leading-[18px] tracking-[0.03em]">
              USE PROMO CODE
            </p>
            <Button className="font-bold text-white text-[17px] leading-5 tracking-[0.25em] py-2 px-10 mt-[5px] rounded-[8px] bg-[#474747]">
              DINEWEEKENDSALE
            </Button>
          </div>
        </div>
        {/* Event right */}
        <div className="flex  justify-between items-center flex-col sm:flex-row md:flex-row lg:flex-row gap-4">
          <div className="flex flex-col justify-between items-center w-full  pt-6 bg-[#efe1c7]">
            <div className="w-full ml-10 ">
              <p className="font-normal text-[15px] leading-6 tracking-[0.03em]">
                Flex Sweatshirt
              </p>
              <div>
                <span className="relative line-through  ">$100.00</span>
                <span className="font-semibold text-lg leading-[23px] ml-2.5">
                  $75.00
                </span>
              </div>
            </div>
            <Image
              src={eventRight1}
              alt="event-right1"
              className="w-[280px] h-[340px] pt-4"
            />
          </div>
          <div className="flex flex-col justify-between items-center w-full pt-6 bg-[#d7d7d9]">
            <div className="w-full ml-10 ">
              <p className="font-normal text-[15px] leading-6 tracking-[0.03em]">
                Flex Push Button Bomber
              </p>
              <div>
                <span className="relative line-through">$225.00</span>
                <span className="font-semibold text-lg leading-[23px] ml-2.5">
                  $190.00
                </span>
              </div>
            </div>
            <Image
              src={eventRight2}
              alt="event-right1"
              className="w-[280px] h-[340px] pt-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
