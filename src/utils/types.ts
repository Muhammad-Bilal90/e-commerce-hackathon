import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  name: string;
  tags: string;
  category?: string;
  price: number;
  description?: string;
  productCare?: string[];
  size: string[];
  quantity: number;
  images: Array<StaticImageData>;
};
