"use client";
import React from "react";
import styles from "./Navbar.module.css";
import { Bebas_Neue } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthLinks } from "../authLinks/AuthLinks";
import CategoryList from "../CategoryList/Category";

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});


export const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <header className={styles.header}>
      <div className={styles.login}>
          <AuthLinks />
        </div>
        <div className={`${styles.head} ${styles.main_menu}`}>
        <input type="checkbox" name="" id="" />
            <div className={styles.hamburger_lines}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
          <div className={styles.siteTitle}>
            <Link
              href={"/"}
              className={styles.logo}
              onClick={() => router.push("/")}
            >
              <h3 className={BebasNeue.className}>True crime Observer</h3>
            </Link>
          </div>
          <div className={styles.menu_list}>
            <ul className={styles.menu_items}>
            <CategoryList />
            </ul>
          </div>
        </div>
      </header>

      
    </>
  );
};
