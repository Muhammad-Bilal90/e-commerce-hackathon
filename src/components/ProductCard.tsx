import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = (props: {
  name: string;
  price: number;
  images: Array<StaticImageData>;
  id: number;
}) => {
  return (
    <div>
      <Link href={`/products/${props.id}`}>
        <div className="py-8 pr-0 pl-0 lg:pl-[1.3rem] flex flex-col justify-center items-center scale-100 transition-transform duration-500 delay-0 ease-in-out hover:scale-110">
          <Image
            src={props.images[0]}
            alt="Event-Left"
            className="w-[300px] h-[320px] md:w-[380px] md:h-[400px] lg:w-[380px] lg:h-[400px]"
            width={380}
            height={400}
          />
          <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
            {props.name}
          </p>
          <span className="font-semibold text-[1.2rem] mt-2 leading-6 text-[#212121]">
            ${props.price}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
