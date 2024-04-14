"use client";
import { links } from "@/utils/links/links";
import React, { Fragment, useState } from "react";
import { Button, Divider, Drawer } from "antd";
import Link from "next/link";
import { GrMenu } from "react-icons/gr";

const AntDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Fragment>
      <Button
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "#1F2124",
          fontSize: "14px",
        }}
        type="primary"
        onClick={showDrawer}
      >
        <GrMenu />
        MENU
      </Button>
      <Drawer
        style={{ display: "flex" }}
        title="MENU"
        onClose={onClose}
        open={open}
      >
        {links?.map((link) => {
          return (
            <Link
              style={{ margin: 0, padding: 0 }}
              onClick={onClose}
              href={link?.path}
              key={link?.path}
            >
              {link?.title}
              <Divider />
            </Link>
          );
        })}
      </Drawer>
    </Fragment>
  );
};

export default AntDrawer;
