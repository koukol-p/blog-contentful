import React from "react";
import Navbar from "./Navbar";
import classes from "./Layout.module.scss"
export default function Layout({ children }) {
  return (
    <div className={classes.container}>
      <Navbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
}
