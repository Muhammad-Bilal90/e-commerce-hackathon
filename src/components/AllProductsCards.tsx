import { Product } from "@/utils/types";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";

const AllProductsCards = (props: {
  name: string;
  tag: string;
  price: number;
  image: Array<StaticImageData>;
  id: number;
}) => {
  // console.log(props);
  return (
    <div>
      <Link href={`/products/${props.id}`}>
        <div className="w-[250px]">
          <Image
            src={props.image[0]}
            alt="Event-Left"
            className="w-full h-full"
          />
          <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
            {props.name}
          </p>
          <p className="font-semibold text-[15px] leading-[15px] text-[#888] mt-2">
            {props.tag}
          </p>
          <p className="font-semibold text-[1.2rem] mt-4 leading-6 text-[#212121]">
            ${props.price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AllProductsCards;
