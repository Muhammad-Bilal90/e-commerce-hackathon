import Image from "next/image";
import Logo from "/public/Logo.webp";
import { Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="py-16 grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 m-8 lg:my-8 lg:mx-16">
        {/* lg:w-4/5 */}
        <div className="flex flex-col justify-center w-full lg:w-4/5  gap-8 ">
          <Image src={Logo} alt="Footer-Logo" className="w-[180px] h-[30px]" />
          <p className="font-normal text-base leading-[22px] text-[#666] max-[1000px]:w-3/5">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex gap-4">
            <div className="py-[10px] px-3 rounded-xl cursor-pointer bg-[#f1f1f1]">
              <Twitter />
            </div>
            <div className="py-[10px] px-3 rounded-xl cursor-pointer bg-[#f1f1f1]">
              <Facebook />
            </div>
            <div className="py-[10px] px-3 rounded-xl cursor-pointer bg-[#f1f1f1]">
              <Linkedin />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-[1.2rem] leading-[19px] tracking-wide text-[#666]">
            Compnay
          </h3>
          <ul>
            <li className="mt-[25px] font-normal text-base leading-[22px] text-[#666]">
              About
            </li>
            <li className="mt-[15px] font-normal text-base leading-[22px] text-[#666]">
              Terms of Use
            </li>
            <li className="mt-[15px] font-normal text-base leading-[22px] text-[#666]">
              Privacy Policy
            </li>
            <li className="mt-[15px] font-normal text-base leading-[22px] text-[#666]">
              How it Works
            </li>
            <li className="mt-[15px] font-normal text-base leading-[22px] text-[#666]">
              Contact Us
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[1.2rem] leading-[19px] tracking-wide text-[#666]">
            Support
          </h3>
          <ul>
            <li className="mt-[25px] font-normal text-base leading-[22px] text-[#666]">
              Support Care
            </li>
            <li className="mt-[15px] font-normal text-base leading-[22px] text-[#666]">
              24h Service
            </li>
            <li className="mt-[15px] font-normal text-base leading-[22px] text-[#666]">
              Quick Chat
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-[1.2rem] leading-[19px] tracking-wide text-[#666]">
            Contact
          </h3>
          <ul>
            <li className="mt-[25px] font-normal text-base leading-[22px] text-[#666]">
              Whatsapp
            </li>
            <li className="mt-[15px] font-normal text-base leading-[22px] text-[#666]">
              Support 24h
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mt-24 border-t-[1px] border-[#666]">
        <p className="max-[1000px]:my-[0.8rem] max-[1000px]:mx-8 my-6 mx-24 font-normal text-base leading-[22px] text-[#666]">
          Copyright © 2022 Dine Market
        </p>
        <p className="max-[1000px]:my-[0.8rem] max-[1000px]:mx-8 my-6 mx-24 font-normal text-base leading-[22px] text-[#666]">
          Design by.{" "}
          <span className="font-bold text-base leading-[15px] text-black">
            Muhammad Bilal
          </span>
        </p>
        <p className="max-[1000px]:my-[0.8rem] max-[1000px]:mx-8 my-6 mx-24 font-normal text-base leading-[22px] text-[#666]">
          Code by.{" "}
          <span className="font-bold text-base leading-[15px] text-black">
            Muhammad Bilal
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
