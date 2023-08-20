import Image from "next/image";
import female2 from "/public/female2.png";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div className="my-16">
      <h2 className="font-bold text-[2rem]">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* Items Details */}
        <div className="flex flex-col mt-8 gap-16 flex-[3_1_0%]">
          <div className="flex flex-col sm:flex-row gap-8 ">
            <div className="w-full h-full sm:w-1/2 sm:h-[10%] lg:w-1/4 lg:h-[200px] rounded-[9px]">
              <Image
                src={female2}
                alt="Product-Image"
                className="w-full h-full rounded-[9px]"
              />
            </div>
            <div className="w-full gap-2 flex flex-col justify-between lg:w-3/4">
              <div className="flex justify-between">
                <h3 className="font-light text-[1.3rem] leading-[25px] text-[#212121]">
                  Cameryn Sash Tie Dress
                </h3>
                <Trash2 className="w-7 h-7 cursor-pointer" />
              </div>
              <p className="font-semibold text-base leading-4 text-[#666]">
                Dress
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#212121]">
                Delivery Estimation
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#ffc700]">
                5 Working Days
              </p>
              <div className="flex justify-between">
                <span className="font-bold text-[1.1rem] leading-5 tracking-widest text-[#212121]">
                  $1090
                </span>
                <div>
                  <span className="mr-[10px] border-2 border-[#f1f1f1] rounded-full py-[5px] px-2 cursor-pointer">
                    -
                  </span>
                  <span>2</span>
                  <span className="ml-[10px] border-2 border-black rounded-full py-[5px] px-2 cursor-pointer">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 ">
            <div className="w-4/5 h-1/5 sm:w-1/2 sm:h-[10%] lg:w-1/4 lg:h-[190px] rounded-[9px]">
              <Image
                src={female2}
                alt="Product-Image"
                className="w-full h-full rounded-[9px]"
              />
            </div>
            <div className="w-full gap-2 flex flex-col justify-between lg:w-3/4">
              <div className="flex justify-between">
                <h3 className="font-light text-[1.3rem] leading-[25px] text-[#212121]">
                  Cameryn Sash Tie Dress
                </h3>
                <Trash2 className="w-7 h-7 cursor-pointer" />
              </div>
              <p className="font-semibold text-base leading-4 text-[#666]">
                Dress
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#212121]">
                Delivery Estimation
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#ffc700]">
                5 Working Days
              </p>
              <div className="flex justify-between">
                <span className="font-bold text-[1.1rem] leading-5 tracking-widest text-[#212121]">
                  $1090
                </span>
                <div>
                  <span className="mr-[10px] border-2 border-[#f1f1f1] rounded-full py-[5px] px-2 cursor-pointer">
                    -
                  </span>
                  <span>2</span>
                  <span className="ml-[10px] border-2 border-black rounded-full py-[5px] px-2 cursor-pointer">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 ">
            <div className="w-4/5 h-1/5 sm:w-1/2 sm:h-[10%] lg:w-1/4 lg:h-[190px] rounded-[9px]">
              <Image
                src={female2}
                alt="Product-Image"
                className="w-full h-full rounded-[9px]"
              />
            </div>
            <div className="w-full gap-2 flex flex-col justify-between lg:w-3/4">
              <div className="flex justify-between">
                <h3 className="font-light text-[1.3rem] leading-[25px] text-[#212121]">
                  Cameryn Sash Tie Dress
                </h3>
                <Trash2 className="w-7 h-7 cursor-pointer" />
              </div>
              <p className="font-semibold text-base leading-4 text-[#666]">
                Dress
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#212121]">
                Delivery Estimation
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#ffc700]">
                5 Working Days
              </p>
              <div className="flex justify-between">
                <span className="font-bold text-[1.1rem] leading-5 tracking-widest text-[#212121]">
                  $1090
                </span>
                <div>
                  <span className="mr-[10px] border-2 border-[#f1f1f1] rounded-full py-[5px] px-2 cursor-pointer">
                    -
                  </span>
                  <span>2</span>
                  <span className="ml-[10px] border-2 border-black rounded-full py-[5px] px-2 cursor-pointer">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 ">
            <div className="w-4/5 h-1/5 sm:w-1/2 sm:h-[10%] lg:w-1/4 lg:h-[190px] rounded-[9px]">
              <Image
                src={female2}
                alt="Product-Image"
                className="w-full h-full rounded-[9px]"
              />
            </div>
            <div className="w-full gap-2 flex flex-col justify-between lg:w-3/4">
              <div className="flex justify-between">
                <h3 className="font-light text-[1.3rem] leading-[25px] text-[#212121]">
                  Cameryn Sash Tie Dress
                </h3>
                <Trash2 className="w-7 h-7 cursor-pointer" />
              </div>
              <p className="font-semibold text-base leading-4 text-[#666]">
                Dress
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#212121]">
                Delivery Estimation
              </p>
              <p className="font-semibold text-base leading-[22px] text-[#ffc700]">
                5 Working Days
              </p>
              <div className="flex justify-between">
                <span className="font-bold text-[1.1rem] leading-5 tracking-widest text-[#212121]">
                  $1090
                </span>
                <div>
                  <span className="mr-[10px] border-2 border-[#f1f1f1] rounded-full py-[5px] px-2 cursor-pointer">
                    -
                  </span>
                  <span>2</span>
                  <span className="ml-[10px] border-2 border-black rounded-full py-[5px] px-2 cursor-pointer">
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="p-8 flex flex-col flex-1 gap-8 bg-[#fbfcff]">
          <h3 className="font-bold">Order Summary</h3>
          <div className="flex justify-between gap-16">
            <p className="">Quantity</p>
            <span>4 Products</span>
          </div>
          <div className="flex justify-between gap-16">
            <p>Sub Total</p>
            <span>$2320</span>
          </div>
          <Button className="w-full font-semibold leading-[18px] py-[10px] flex items-center justify-center gap-2 text-white bg-[#212121]">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
