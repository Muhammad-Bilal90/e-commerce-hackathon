"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type PropsType = {
  images: Array<StaticImageData>;
};

const ProductDetailsImages = (props: PropsType) => {
  const [path, setPath] = useState<number>(0);
  return (
    <div className="flex flex-[2_1_0%] gap-8">
      <div className="flex flex-col gap-4">
        {props?.images.map((src, ind) => {
          return (
            <Image
              key={ind}
              src={src}
              alt="Product-Image"
              className="max-[450px]:w-[50px] max-[450px]:h-[50px] max-[650px]:w-[80px] max-[650px]:h-[80px] w-[100px] h-[100px] cursor-pointer"
              onClick={() => setPath(ind)}
            />
          );
        })}
      </div>
      <div className="w-[70%] h-full lg:w-4/5">
        <Image
          src={props?.images[path]}
          alt="Product-Image"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProductDetailsImages;
