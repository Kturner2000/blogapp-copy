"use client"
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Card = ({ key, item }) => {
  const router = useRouter();
  return (
    <article className={styles.collumn} key={key}>
      <div className="head">
        <Link href={`/posts/${item.slug}`}>
          <span className={styles.title}>{item.title}</span>
        </Link>
        <p>
          <span className={styles.subtitle}>{item.subtitle}</span>
        </p>
      </div>
      {item.img && (
        <figure className={styles.figure}>
          <div className={styles.polaroid}>
            <Image
              alt="placeholder"
              src={item.img}
              width={"600"}
              height={"400"}
            />
          </div>
        </figure>
      )}
      {item.excerpt}
      <p>
        <Link className={styles.more_read} href={`/posts/${item.slug}`}>
          Read More...
        </Link>
      </p>
    </article>
  );
};
