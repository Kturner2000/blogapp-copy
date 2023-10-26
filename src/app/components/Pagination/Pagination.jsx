"use client";
import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";

export const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div>
      <button
        className={`${styles.button} ${styles.prev}`}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Prev
      </button>

      <button
        className={`${styles.button} ${styles.next}`}
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page +  1}`)}
      >Next
      </button>
    </div>
  );
};
