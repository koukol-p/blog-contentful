import React from "react";
import Navbar from "./Navbar";
import classes from "./Layout.module.scss"
export default function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Navbar />
      <main >{children}</main>
    </div>
  );
}
