import React from "react";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

const fetchData = async (params) => {
  return await fetch(
    `${process.env.BASE_URL}/vaksinatsiya-listlar/${params}`
  ).then((res) => res.json());
};

export const generateMetadata = async ({ params = null }) => {
  return {
    title: params?.vaksinatsiyalar,
    description: `${params?.vaksinatsiyalar} haqidagi maqolalar to'plami.`,
  };
};

const Vaksinatisyalar = async ({ params = null }) => {
  const articles = await fetchData(params?.vaksinatsiyalar.replace(/-/g, " "));

  return (
    <div className="category-list">
      <h2 className="title">
        {params?.vaksinatsiyalar.replace(/-/g, " ").toUpperCase()}
      </h2>

      <main className="main">
        {articles.length > 0 ? (
          <section className="content">
            {articles?.reverse()?.map((article) => (
              <ArticleCard key={article?.id} article={article} />
            ))}
          </section>
        ) : (
          <div className="content">
            <h2>Hozircha maqolalar mavjud emas.</h2>
          </div>
        )}

        <aside className="advertisement">ADVERTISEMENT</aside>
      </main>
    </div>
  );
};

export default Vaksinatisyalar;
