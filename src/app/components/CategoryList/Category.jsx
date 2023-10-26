import Link from "next/link";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {data?.map((item) => (
        <li key={item.title}>
          <Link href={`/blog?cat=${item.slug}`}>
            {item.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default CategoryList;
