import Image, { StaticImageData } from "next/image";
import { AllProducts } from "@/utils/mock";
import Link from "next/link";
import AllProductsCards from "@/components/AllProductsCards";
import { Product } from "@/utils/types";

const page = () => {
  return (
    <div className="grid max-[450px]:grid-cols-1 max-[650px]:gird-cols-2 max-[650px]:gap-8 max-[650px]:my-16 max-[650px]:mx-8 max-[1000px]:grid-cols-2 sm:my-20 lg:my-20 max-[1279px]:grid-cols-3 xl:grid-cols-4 justify-between justify-items-center md:gap-16">
      {AllProducts.map((item: Product, ind) => {
        return (
          <AllProductsCards
            key={item.id}
            name={item.name}
            tag={item.tags}
            price={item.price}
            image={item.images}
            id={item.id}
          />
          //   <div key={item.id}>
          //     <Link href={`/products/${item.id}`}>
          //       <div className="w-[250px]">
          //         <Image
          //           src={item.images && item.images[0]}
          //           alt="Event-Left"
          //           className="w-full h-full"
          //         />
          //         <p className="font-semibold text-[1.1rem] mt-2 leading-6 tracking-[0.03em] text-[#212121]">
          //           {item.name}
          //         </p>
          //         <p className="font-semibold text-[15px] leading-[15px] text-[#888] mt-2">
          //           {item.tags}
          //         </p>
          //         <p className="font-semibold text-[1.2rem] mt-4 leading-6 text-[#212121]">
          //           ${item.price}
          //         </p>
          //       </div>
          //     </Link>
          //   </div>
        );
      })}
    </div>
  );
};

export default page;
