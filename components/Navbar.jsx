import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';
import classes from "./Navbar.module.scss";
export default function Navbar() {
    const router = useRouter();

    const linkStyle = (path) => {
        if (router.pathname === path) {
            return `${classes.navItem} ${classes.active}`
        } 
        return classes.navItem
    } 
  return (
    <div className={classes.navbar}>

      <span className={classes.brand}>koukol-p</span>
      <div className={classes.links}>
          <Link href="/">
            <a className={linkStyle("/")}>Home</a>
          </Link>

          <Link href="/about">
            <a className={linkStyle("/about")}>About</a>
          </Link>

          <Link href="/blog">
            <a className={linkStyle("/blog")}>Blog</a>
          </Link>

          <Link href="/contact">
            <a className={linkStyle("/contact")}>Contact</a>
          </Link>
          </div>
    </div>
  );
}
