"use client";
import { Button } from "antd";
import React from "react";

const AntButton = ({ title = null, handleClick =null }) => {
  return (
    <Button type="primary" onClick={handleClick}>
      {title}
    </Button>
  );
};

export default AntButton;
