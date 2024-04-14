import React from "react";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export const metadata = {
  title: "Rivojlanishi",
  description: "Rivojlanishi haqida ma'lumotlar",
};

const fetchData = async () => {
  return await fetch(`${process.env.BASE_URL}/rivojlanishi-category`).then(
    (res) => res.json()
  );
};

const RivojlanishiCategory = async () => {
  let data = await fetchData();
  return data?.length > 0 ? (
    <div className="rivojlanishi">
      <h1 className="title">RIVOJLANISHI</h1>
      <div className="content">
        {data?.map((value) => {
          return (
            <CategoryCard
              firstSegment={"rivojlanishi"}
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

export default RivojlanishiCategory;
