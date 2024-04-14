import Advertisement from "@/components/Advertisement/Advertisement";
import Image from "next/image";
import React from "react";

const fetchData = async (params) => {
  return await fetch(`${process.env.BASE_URL}/onalarga-maslahatlar-list`).then(
    (res) => res.json()
  );
};

export const generateMetadata = async ({ params = null }) => {
  const data = await fetchData(params);
  const article = data?.find(
    (article) => article?.title == params?.onalargaMaslahat.replace(/-/g, " ")
  );
  const articleHeading = article?.description[0]?.description;

  return {
    title: article.title,
    description: articleHeading,
  };
};

const onalargaMaslahat = async ({ params = null }) => {
  const data = await fetchData(params);

  const article = data?.find(
    (article) => article?.title == params?.onalargaMaslahat.replace(/-/g, " ")
  );

  const articleHeading = article?.description[0]?.description;
  const articleDescription = article?.description.slice(
    1,
    article?.description?.length
  );

  return (
    <div className="article-page">
      <main className="main">
        <h1 className="heading">{article?.title}</h1>

        <p className="article-heading-text">{articleHeading}</p>

        <Image
          src={article?.image ? article?.image : "/noImage.jpg"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", marginBottom: "20px" }} // optional
          alt={article?.title}
        />

        <div className="content">
          {articleDescription.map((value) => {
            return (
              <div className="article-content" key={article?.id}>
                {value?.description?.split(" ").length > 10 ? (
                  <p className="article-desc">{value?.description}</p>
                ) : (
                  <h2 className="sub-heading">{value?.description}</h2>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Advertisement />
    </div>
  );
};

export default onalargaMaslahat;
