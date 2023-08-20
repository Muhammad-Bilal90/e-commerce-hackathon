import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const NewsLetter = () => {
  return (
    <section className="py-24 flex flex-col justify-center items-center text-center relative z-[1]">
      <div className="text-[4rem] font-extrabold lg:text-[7.5rem] leading-[151px] text-[#f2f3f7] absolute -z-[1]">
        Newsletter
      </div>
      <h1 className="mb-2 text-3xl font-bold lg:text-[2rem] leading-10 tracking-[.03em] text-[#212121]">
        Subscribe Our Newsletter
      </h1>
      <p className="mb-4 lg:mb-8 font-light text-base leading-[26px] text-[#212121]">
        Get that latest information and promo offers directly
      </p>
      <form>
        <Input
          type="email"
          placeholder="Input email address"
          className="pr-24 pl-5 py-[10px] mb-4 rounded-lg"
        />
        <Button className="py-[10px] px-10 lg:px-5 bg-black text-white font-semibold text-[.9rem] leading-4">
          Get Started
        </Button>
      </form>
    </section>
  );
};

export default NewsLetter;
