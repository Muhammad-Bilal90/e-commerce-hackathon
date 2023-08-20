import Link from "next/link";
import Logo from "/public/Logo.webp";
import Image from "next/image";
import { ShoppingCart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center m-8 lg:my-8 lg:mx-16">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" className="w-40" />
        </Link>
        <ul className="hidden lg:flex gap-x-10">
          <li className="text-lg">
            <Link href={"/category/female"}>Female</Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/male"}>Male</Link>
          </li>
          <li className="text-lg">
            <Link href={"/category/kids"}>Kids</Link>
          </li>
          <li className="text-lg">
            <Link href={"/products"}>All Products</Link>
          </li>
        </ul>
        <Link href={"/cart"}>
          <div className="h-10 w-10 hidden lg:flex justify-center items-center rounded-full bg-gray-300">
            <ShoppingCart />
          </div>
        </Link>
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <Link href={"/"}>
                <Image src={Logo} alt="Logo" className="w-40" />
              </Link>
              {/* <SheetHeader>
                <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader> */}
              <div className="flex flex-col h-full items-center justify-center gap-10">
                <Link href={"/cart"}>
                  <div className="h-10 w-10 flex justify-center items-center rounded-full bg-gray-300">
                    <SheetClose>
                      <ShoppingCart />
                    </SheetClose>
                  </div>
                </Link>
                <ul className="flex flex-col items-center justify-center w-full gap-8">
                  <li className="text-2xl font-medium">
                    <Link href={"/category/female"}>
                      <SheetClose>Female</SheetClose>
                    </Link>
                  </li>
                  <li className="text-2xl font-medium">
                    <Link href={"/category/male"}>
                      <SheetClose>Male</SheetClose>
                    </Link>
                  </li>
                  <li className="text-2xl font-medium">
                    <Link href={"/category/kids"}>
                      <SheetClose>Kids</SheetClose>
                    </Link>
                  </li>
                  <li className="text-2xl font-medium">
                    <Link href={"/products"}>
                      <SheetClose>All Products</SheetClose>
                    </Link>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;
