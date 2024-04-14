import React from "react";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export const metadata = {
  title: "Onalarga maslahatlar",
  description: "Onalarga maslahatlar haqida maqolalar",
};

const fetchData = async () => {
  return await fetch(
    `${process.env.BASE_URL}/onalarga-maslahatlar-category`
  ).then((res) => res.json());
};

const OnalargaMaslahatlarCategory = async () => {
  let data = await fetchData();

  return data.length > 0 ? (
    <div className="onalarga-maslahatlar">
      <h1 className="title">ONALARGA MASLAHATLAR</h1>
      <div className="content">
        {data?.map((value) => {
          return (
            <CategoryCard
              firstSegment={"onalarga-maslahatlar"}
              value={value}
              key={value?.id}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <h2 style={{ textAlign: "center", marginTop: "10%" }}>
      HOZIRCHA MAQOLALAR MAVJUD EMAS
    </h2>
  );
};

export default OnalargaMaslahatlarCategory;
