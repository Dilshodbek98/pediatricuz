"use client";
import { links } from "@/utils/links/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AntDrawer from "../UI/AntDrawer/AntDrawer";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="menu">
        <Link className="logo" href={"/"}>
          PEDIATRIC.UZ
        </Link>
        <AntDrawer />
      </div>
      <nav className="navbar">
        {links?.map((link) => {
          return (
            <Link
              className={pathname.includes(link?.path) ? "active" : ""}
              href={link?.path}
              key={link?.path}
            >
              {link.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
