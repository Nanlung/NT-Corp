import React, { ReactNode } from "react";
import Link from "next/link";
import { RxCube, RxDashboard } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FiSettings } from "react-icons/fi";

interface SidebarProps {
  children: ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col items-center">
          <Link href="/">
            <div className="bg-gray-500 text-white p-3 rounded-lg inline-block">
              <RxCube size={30} />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href="/">
            <div className="bg-gray-100 hover: bg-black-100 p-3 my-4 rounded-lg inline-block cursor-pointer">
              <RxDashboard size={30} />
            </div>
          </Link>
          <Link href="/customers">
            <div className="bg-gray-100 hover: bg-black-100 p-3 my-4 rounded-lg inline-block cursor-pointer">
              <CgProfile size={30} />
            </div>
          </Link>
          <Link href="/orders">
            <div className="bg-gray-100 hover: bg-black-100 p-3 my-4 rounded-lg inline-block cursor-pointer">
              <MdOutlineShoppingCart size={30} />
            </div>
          </Link>
          <Link href="/">
            <div className="bg-gray-100 hover: bg-black-100 p-3 my-4 rounded-lg inline-block cursor-pointer">
              <FiSettings size={30} />
            </div>
          </Link>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
