"use client";

import { usePathname } from "next/navigation";
import Navbar from "../Navbar";

const Navigation = () => {
  const pathname = usePathname();

  if (pathname === "/register" || pathname === "/login") {
    return null;
  }
  return <Navbar />;
};

export default Navigation;
