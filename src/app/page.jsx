import CardList from './components/CardList/CardList';
import styles from './page.module.css'

export default function Home({searchParams}) {

  const page = parseInt(searchParams.page) || 1;

  return (
    <>
  
    <div className={styles.content}>
      <div className={styles.collumns}>
        <CardList page={page} />
      </div>
    </div>
    </>
  );
}
