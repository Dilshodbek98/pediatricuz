import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Link href={"/"} className="link">
        <h2 className="about-us">PEDIATRIC.UZ</h2>
      </Link>
      <div className="socials">
        <h2 className="subheading">IJTIMOIY TARMOQLAR</h2>
        <div className="icons">
          <Link
            href={"https://t.me/Pediatric_uz"}
            target="_blank"
            className="social"
          >
            <FaTelegram className="icon" size={24} />
          </Link>
          <Link
            href={"https://instagram.com/pediatric_uz?utm_medium=copy_link"}
            className="social"
            target="_blank"
          >
            <FaInstagram className="icon" size={24} />
          </Link>
          <Link
            href={
              "https://www.facebook.com/groups/1047723576003535/?ref=share_group_link"
            }
            className="social"
            target="_blank"
          >
            <FaFacebook className="icon" size={24} />
          </Link>
          <Link
            href={"https://youtube.com/@pediatric_uz"}
            className="social"
            target="_blank"
          >
            <FaYoutube className="icon" size={28} />
          </Link>
          <Link
            href={"https://x.com/Pediatric_uz?t=oqVYC_JZr5UZqA6nQXybdw&s=09"}
            className="social"
            target="_blank"
          >
            <FaTwitterSquare className="icon" size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
