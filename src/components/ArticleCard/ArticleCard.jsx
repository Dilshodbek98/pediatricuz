"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
const ArticleCard = ({ article = null }) => {
  const router = useRouter();
  const articleDescription = article?.description[1]?.description
    .split(" ")
    .slice(0, 36)
    .join(" ");

  const articlePath = article?.title.replace(/ /g, "-");
  return (
    <article
      className="article-card"
      onClick={() => router.push(`${article?.category}/${articlePath}`)}
    >
      <div className="article-img-wrapper">
        <Image
          src={article?.image !== null ? article?.image : "/noImage.jpg "}
          fill
          alt={article?.title}
        />
      </div>
      <div className="article-content">
        <h3 className="article-title">{article?.title}</h3>
        <p className="article-desc">{articleDescription}...</p>
      </div>
    </article>
  );
};

export default ArticleCard;
