import Link from "next/link";
import React from "react";

import classes from "./Navbar.module.scss";
export default function Navbar() {
  return (
    <div className={classes.navbar}>

      <span className={classes.brand}>koukol-p</span>
      <div className={classes.links}>
          <Link href="/">
            <a className={classes.navItem}>Home</a>
          </Link>

          <Link href="/about">
            <a className={classes.navItem}>About</a>
          </Link>

          <Link href="/blog">
            <a className={classes.navItem}>Blog</a>
          </Link>

          <Link href="/contact">
            <a className={classes.navItem}>Contact</a>
          </Link>
          </div>
    </div>
  );
}
