import { AllProducts } from "@/utils/mock";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
// import { useState } from "react";
import ProductDetailsImages from "@/components/productDetailsImages";
import { StaticImageData } from "next/image";

const getProductById = (id: number) => {
  console.log("id", id);
  const product = AllProducts.find((item) => item.id == id);
  console.log(product?.name);
  return product;
};

const ProductDetails = ({ params }: { params: { id: number } }) => {
  // const [path, setPath] = useState<number>(0);
  console.log(params.id);
  const currentProduct = getProductById(params.id);
  console.log("currentProduct", currentProduct?.images);

  return (
    <div className="py-8 sm:py-16 bg-[#fcfcfc]">
      {/* <div>Product Details Page for Product {params.id}</div> */}
      {/* Prodcut Details */}
      <div className="flex justify-center max-[1023px]:flex-col lg:gap-4">
        <ProductDetailsImages
          images={currentProduct?.images as Array<StaticImageData>}
        />
        {/* <div className="flex flex-[2_1_0%] gap-8">
          <div className="flex flex-col gap-4">
            {currentProduct?.images.map((src, ind) => {
              return (
                <Image
                  key={ind}
                  src={src}
                  alt="Product-Image"
                  className="max-[450px]:w-[50px] max-[450px]:h-[50px] max-[650px]:w-[80px] max-[650px]:h-[80px] w-[100px] h-[100px] cursor-pointer"
                  onClick={() => setPath(ind)}
                />
              );
            })} */}
        {/* <Image
              src={female2}
              alt="Product-Image"
              className="max-[450px]:w-[50px] max-[450px]:h-[50px] max-[650px]:w-[80px] max-[650px]:h-[80px] w-[100px] h-[100px] cursor-pointer"
            />
            <Image
              src={female2a}
              alt="Product-Image"
              className="max-[450px]:w-[50px] max-[450px]:h-[50px] max-[650px]:w-[80px] max-[650px]:h-[80px] w-[100px] h-[100px] cursor-pointer"
            />
            <Image
              src={female2b}
              alt="Product-Image"
              className="max-[450px]:w-[50px] max-[450px]:h-[50px] max-[650px]:w-[80px] max-[650px]:h-[80px] w-[100px] h-[100px] cursor-pointer"
            />
            <Image
              src={female2c}
              alt="Product-Image"
              className="max-[450px]:w-[50px] max-[450px]:h-[50px] max-[650px]:w-[80px] max-[650px]:h-[80px] w-[100px] h-[100px] cursor-pointer"
            /> */}
        {/* </div>
          <div className="w-[70%] h-full lg:w-4/5">
            <Image
              src={currentProduct?.images[path]}
              alt="Product-Image"
              priority={true}
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div> */}
        <div className="flex flex-col flex-1 gap-10 mt-16">
          <div>
            <h3 className="font-normal text-[1.625rem] leading-[33px] tracking-wider text-[#212121]">
              {currentProduct?.name}
            </h3>
            <span className="font-semibold text-[1.3rem] opacity-[.3]">
              {currentProduct?.tags}
            </span>
          </div>
          <div>
            <p className="font-bold text-[.9rem] leading-4 tracking-wider text-[#212121]">
              SELECT SIZE
            </p>
            <ul className="flex gap-4 mt-4">
              {currentProduct?.size.map((item, ind) => {
                return (
                  <li
                    key={ind}
                    className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider list-none"
                  >
                    {item}
                  </li>
                );
              })}
              {/* <li className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider list-none">
                XS
              </li>
              <li className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider list-none">
                S
              </li>
              <li className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider list-none">
                M
              </li>
              <li className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider list-none">
                L
              </li>
              <li className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer text-base text-[#666] font-bold leading-4 tracking-wider list-none">
                XL
              </li> */}
            </ul>
          </div>
          <div className="flex gap-8">
            <h4 className="font-bold">Quantity: </h4>
            <div className="shrink-0">
              {/* [#f1f1f1] */}
              <span className="mr-[10px] border-2 border-black rounded-full py-[3px] px-2 cursor-pointer">
                -
              </span>
              <span>{currentProduct?.quantity}</span>
              <span className="ml-[10px] border-2 border-black rounded-full py-[3px] px-2 cursor-pointer">
                +
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button className="font-semibold text-sm leading-[18px] bg-[#212121] py-[10px] px-4 flex justify-center items-center gap-2 text-[#fff]">
              <ShoppingCartIcon /> Add to Cart
            </Button>
            <p className="font-bold text-2xl leading-[30px] tracking-widest text-[#212121]">
              ${currentProduct?.price}
            </p>
          </div>
        </div>
      </div>
      {/* Prodcut Overview */}
      <div className="py-8 flex flex-col mt-16 gap-8">
        <div className="relative flex z-[2] border-b-2 border-[#c4c4c4] w-full h-[150px]">
          <div className="font-extrabold max-[450px]:text-[3.2rem] max-[650px]:text-7xl max-[1023px]:text-8xl lg:text-[7.5rem] leading-[151px] opacity-[.7] w-full h-full text-[#f2f3f7]">
            Overview
          </div>
          <h2 className="font-bold text-[1.4rem] leading-[25px] tracking-wider pb-12 z-[2] top-[45%] absolute text-[#212121]">
            Product Information
          </h2>
        </div>
        <div className="flex z-[2] flex-col gap-8 sm:flex-row sm:gap-0">
          <h4 className="flex-1 font-bold text-base leading-[19px] tracking-wider text-[#666]">
            PRODUCT DETAILS
          </h4>
          <p className="flex-[2_1_0%] font-light text-base leading-[26px] tracking-wider text-left text-[#212121]">
            {currentProduct?.description}
          </p>
        </div>
        <div className="flex z-[2] flex-col gap-8 sm:flex-row sm:gap-0">
          <h4 className="flex-1 font-bold text-base leading-[19px] tracking-wider text-[#666]">
            PRODUCT CARE
          </h4>
          <ul className="flex-[2_1_0%]">
            {currentProduct?.productCare?.map((item, ind) => {
              return (
                <li
                  key={ind}
                  className="font-semibold text-base leading-[26px] tracking-wider text-justify list-disc list-inside text-[#212121]"
                >
                  {item}
                </li>
              );
            })}
            {/* <li className="font-semibold text-base leading-[26px] tracking-wider text-justify list-disc list-inside text-[#212121]">
              Lorem ipsum dolor sit amet
            </li>
            <li className="font-semibold text-base leading-[26px] tracking-wider text-justify list-disc list-inside text-[#212121]">
              Lorem ipsum dolor sit amet
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
