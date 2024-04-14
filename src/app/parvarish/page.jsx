import React from "react";
import CategoryCard from "@/components/CategoryCard/CategoryCard";

export const metadata = {
  title: "Parvarish",
  description: "Parvarish haqida ma'lumotlar",
};

const fetchData = async () => {
  return await fetch(`${process.env.BASE_URL}/parvarish-category`).then((res) =>
    res.json()
  );
};

const ParvarishCategory = async () => {
  let data = await fetchData();

  return data?.length ? (
    <div className="parvarish">
      <h1 className="title">PARVARISH</h1>
      <div className="content">
        {data?.map((value) => {
          return (
            <CategoryCard
              firstSegment={"parvarish"}
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

export default ParvarishCategory;
