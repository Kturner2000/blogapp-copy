"use client";
import useSWR from "swr";
import Link from "next/link";
import styles from "./comment.module.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export const Comments = ({ postSlug }) => {
  const router = useRouter();

  const { status } = useSession();

  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={styles.comments_container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <>
          <textarea
            rows={2}
            cols={40}
            placeholder="write a comment..."
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </>
      ) : (
        <div className={styles.unauthenticated_comment}>
          <Link onClick={() => router.push("/login")} href={"/login"}>
            Login to comments{" "}
          </Link>
        </div>
      )}
      <div className={styles.comments}>
        {isLoading
          ? "loading"
          : data.map((comment) => (
              <div key={comment.id} className={styles.comment}>
                <h1 className={styles.commenter_name}>{comment.user.name}</h1>
                <p className={styles.comment_date}>{comment.createdAt}</p>
                <p className={styles.comment_content}>{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};
