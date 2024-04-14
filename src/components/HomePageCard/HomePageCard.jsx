"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const HomePageCard = ({ data = null, path = null }) => {
  const router = useRouter();
  return (
    <div
      className="home-page-card"
      onClick={() =>
        router.push(
          `${path}/${data?.category}/${data?.title.replace(/ /g, "-")}`
        )
      }
    >
      <div className="image-wrapper">
        <Image
          width={0}
          height={0}
          alt={data?.title}
          className="img"
          src={data?.image ? data?.image : "/noImage.jpg"}
          sizes="100vw"
        />
        <div className="blur"></div>
        <div className="card-content">
          <p className="category">{data?.category}</p>
          <p className="card-title">{data?.title}</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
