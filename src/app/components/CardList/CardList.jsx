import styles from "./cardlist.module.css";
import { Pagination } from "../Pagination/Pagination";
import { Card } from "../Card/Card";

const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const CardList = async ({ page, cat }) => {
  const {posts, count} = await getData(page, cat);

  const POST_PER_PAGE = 8;

  const hasPrev = POST_PER_PAGE * (page-1) > 0
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  const reversedPosts = posts?.reverse();
  
  return (
    <>
      <div className={styles.collumns}>
        {reversedPosts?.map((item) => {
          return <Card item={item} key={item.id} />;
        })}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}  />
    </>
  );
};

export default CardList