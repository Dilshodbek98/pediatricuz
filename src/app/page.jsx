import React from "react";
import HomePageCard from "@/components/HomePageCard/HomePageCard";

export const metadata = {
  title: "Pediatric.uz",
  description: "Pediatric.uz - tibbiyotga oid maqolalar to'plami.",
};

const fetchKasalliklar = async () => {
  const res = await fetch(`${process.env.BASE_URL}/kasalliklar-list`);
  return await res.json();
};
const fetchParvarish = async () => {
  return await fetch(`${process.env.BASE_URL}/parvarish-list`).then((res) =>
    res.json()
  );
};
const fetchOnalargaMaslahatlar = async () => {
  return await fetch(`${process.env.BASE_URL}/onalarga-maslahatlar-list`).then(
    (res) => res.json()
  );
};
const fetchOvqatlantirish = async () => {
  return await fetch(`${process.env.BASE_URL}/ovqatlantirish-list`).then(
    (res) => res.json()
  );
};

const Home = async () => {
  const kasalliklar = await fetchKasalliklar();
  const parvarish = await fetchParvarish();
  const onalargaMaslahatlar = await fetchOnalargaMaslahatlar();
  const ovqatlantirish = await fetchOvqatlantirish();

  return (
    <main className="home-page">
      <h1 className="title">YANGI MAQOLALAR</h1>

      <section className="content">
        {kasalliklar
          .slice(kasalliklar.length - 6, kasalliklar.length)
          .map((value) => {
            return (
              <HomePageCard key={value.id} data={value} path={"kasalliklar"} />
            );
          })}
      </section>
      <hr />

      <section className="content">
        {parvarish
          .slice(parvarish.length - 2, parvarish.length)
          .map((value) => {
            return (
              <HomePageCard key={value.id} data={value} path={"parvarish"} />
            );
          })}
      </section>
      <hr />

      <section className="content">
        {onalargaMaslahatlar
          .slice(onalargaMaslahatlar.length - 2, onalargaMaslahatlar.length)
          .map((value) => {
            return (
              <HomePageCard
                key={value.id}
                data={value}
                path={"onalarga-maslahatlar"}
              />
            );
          })}
      </section>
      <hr />

      <section className="content">
        {ovqatlantirish
          .slice(ovqatlantirish.length - 2, ovqatlantirish.length)
          .map((value) => {
            return (
              <HomePageCard
                key={value.id}
                data={value}
                path={"ovqatlantirish"}
              />
            );
          })}
      </section>
    </main>
  );
};

export default Home;
