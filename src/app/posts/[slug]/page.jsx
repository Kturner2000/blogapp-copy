import { RecentPosts } from "@/app/components/RecentPosts/RecentPosts";
import styles from "./singlepage.module.css";
import { Comments } from "@/app/components/comments/Comments";
import Link from 'next/link';

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage =async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  

  return (
    <div className={styles.single_post}>
      <div className={styles.content_and_sidebar}>
        <div className={styles.post_content_and_comments}>
          <div className={styles.post_information}>
            <h1 className={styles.post_title}>{data.title}</h1>
          </div>
          
          
            <div
              className={styles.post_content}
              dangerouslySetInnerHTML={{ __html: data.desc ? data.desc : "Description not available" }}
            />
          

          <hr />
          <div className={styles.comments}>
            <Comments postSlug={slug}/>
          </div>
        </div>

        <aside className={styles.sidebar}>
          <RecentPosts />
        </aside>
      </div>
    </div>
  );
};

export default SinglePage;
