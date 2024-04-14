"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const CategoryCard = ({ value = null, firstSegment = null }) => {
  const router = useRouter();
  return (
    <div
      className="card"
      key={value?.id}
      onClick={() =>
        router.push(`${firstSegment}/${value?.path.replace(/ /g, "-")}`)
      }
    >
      <div className="img-wrapper">
        <Image src={value?.image} alt={value?.title} fill />
      </div>
      <p className="card-title">{value?.title.toUpperCase()}</p>
      <MdKeyboardArrowRight className="arrow-icon" size={24} />
    </div>
  );
};

export default CategoryCard;
