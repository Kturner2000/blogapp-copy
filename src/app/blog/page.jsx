import styles from "./Blogpage.module.css";
import CardList from "../components/CardList/CardList";

const Blogpage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.content}>
      <div className={styles.collumns}>
        <CardList page={page} cat={cat} />
      </div>
    </div>
  );
};

export default Blogpage;
