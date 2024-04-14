import React from "react";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export const metadata = {
  title: "Bolimlar",
  description: "Bolimlar haqida ma'lumotlar to'plami",
};

const fetchData = async () => {
  return await fetch(`${process.env.BASE_URL}/bolimlar-category`).then((res) =>
    res.json()
  );
};

const BolimlarCategory = async () => {
  let data = await fetchData();

  return data.length > 0 ? (
    <div className="bolimlar">
      <h1 className="title">BO&apos;LIMLAR</h1>
      <div className="content">
        {data?.map((value) => {
          return (
            <CategoryCard
              firstSegment={"bolimlar"}
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

export default BolimlarCategory;
