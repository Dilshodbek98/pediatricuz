"use client";
import AntButton from "@/components/UI/AntButton/AntButton";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="error">
      <h2 className="title">{error?.message}</h2>
      <AntButton title={"Qayta urinish"} handleClick={reset} />
    </div>
  );
};

export default Error;
