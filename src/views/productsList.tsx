"use client";
import Image from "next/image";
import { Navigation, A11y, Lazy } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import female1 from "/public/female1.png";
import { AllProducts } from "@/utils/mock";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-16">
      <div className="flex flex-col gap-4 mb-8">
        <span className="font-bold text-center text-xs leading-[15px] tracking-widest text-[#0062f5]">
          PRODUCTS
        </span>
        <h2 className="font-bold text-center text-[32px] leading-10 tracking-[0.03em] text-[#212121]">
          Check What We Have
        </h2>
      </div>
      <Swiper
        breakpoints={{
          // width >= 300
          300: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
          // width >= 1000
          1000: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          // width >= 1260
          1260: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        // navigation
      >
        <div>
          {AllProducts.map((item, ind) => {
            return (
              <SwiperSlide key={item.id}>
                <ProductCard
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  images={item.images}
                  id={item.id}
                />
                {/* <div>
                  <Link href={`/products/${item.id}`}>
                    <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                      <Image
                        src={item.images && item.images[0]}
                        alt="Event-Left"
                        className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                        width={380}
                        height={400}
                      />
                      <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                        {item.name}
                      </p>
                      <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                        ${item.price}
                      </span>
                    </div>
                  </Link>
                </div> */}
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <div>
              <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                <Image
                  src={female1}
                  alt="Event-Left"
                  className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                />
                <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                  Brushed Paglan Sweatshirt
                </p>
                <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                  $195
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                <Image
                  src={female1}
                  alt="Event-Left"
                  className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                />
                <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                  Brushed Paglan Sweatshirt
                </p>
                <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                  $195
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                <Image
                  src={female1}
                  alt="Event-Left"
                  className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                />
                <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                  Brushed Paglan Sweatshirt
                </p>
                <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                  $195
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                <Image
                  src={female1}
                  alt="Event-Left"
                  className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                />
                <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                  Brushed Paglan Sweatshirt
                </p>
                <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                  $195
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                <Image
                  src={female1}
                  alt="Event-Left"
                  className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                />
                <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                  Brushed Paglan Sweatshirt
                </p>
                <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                  $195
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                <Image
                  src={female1}
                  alt="Event-Left"
                  className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                />
                <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                  Brushed Paglan Sweatshirt
                </p>
                <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                  $195
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
                <Image
                  src={female1}
                  alt="Event-Left"
                  className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
                />
                <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
                  Brushed Paglan Sweatshirt
                </p>
                <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
                  $195
                </span>
              </div>
            </div>
          </SwiperSlide> */}
        </div>
      </Swiper>
    </section>
  );
};

export default Carousel;
