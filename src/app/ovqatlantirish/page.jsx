import React from "react";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export const metadata = {
  title: "Ovqatlantirish",
  description: "Ovqatlantirish haqida ma'lumotlar",
};

const fetchData = async () => {
  return await fetch(`${process.env.BASE_URL}/ovqatlantirish-category`).then(
    (res) => res.json()
  );
};

const OvqatlantirishCategory = async () => {
  let data = await fetchData();

  return data.length > 0 ? (
    <div className="ovqatlantirish">
      <h1 className="title">OVQATLANTIRISH</h1>
      <div className="content">
        {data?.map((value) => {
          return (
            <CategoryCard
              firstSegment={"ovqatlantirish"}
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

export default OvqatlantirishCategory;
