import React from "react";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export const metadata = {
  title: "Kasalliklar",
  description: "Kasalliklar haqida ma'lumotlar",
};

const fetchData = async () => {
  return await fetch(`${process.env.BASE_URL}/kasalliklar-category`).then(
    (res) => res.json()
  );
};

const KasalliklarCategory = async () => {
  let data = await fetchData();

  return data.length > 0 ? (
    <div className="kasalliklar">
      <h1 className="title">KASALLIKLAR</h1>
      <div className="content">
        {data?.map((value) => {
          return (
            <CategoryCard
              firstSegment={"kasalliklar"}
              value={value || null}
              key={value?.id || null}
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

export default KasalliklarCategory;
