'use client'
import Link from "next/link";
import styles from "./authLinks.module.css";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export const AuthLinks = () => {
  const { status } = useSession();

  return (
    <div className={styles.authLinks}>
      {status === "unauthenticated" ? (
        <Link href={"/login"}>Login</Link>
      ) : (
        <div className={styles.authenticatedLinks}>
          
          <span>
            <Link href={"/"} onClick={() => signOut()}>
              Sign out
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};
