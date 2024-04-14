import React from "react";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export const metadata = {
  title: "Vaksinatsiya",
  description: "Vaksinatsiya haqida ma'lumotlar",
};

const fetchData = async () => {
  return await fetch(`${process.env.BASE_URL}/vaksinatsiya-category`).then(
    (res) => res.json()
  );
};

const VaksinatsiyaCategory = async () => {
  let data = await fetchData();

  return data?.length > 0 ? (
    <div className="vaksinatsiya">
      <h1 className="title">VAKSINATSIYA</h1>
      <div className="content">
        {data?.map((value) => {
          return (
            <CategoryCard
              firstSegment={"vaksinatsiya"}
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

export default VaksinatsiyaCategory;
