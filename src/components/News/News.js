import React from "react";
import styles from "./news.module.scss";
const News = ({img ,title}) => {
  return (
    <div className={styles.news__item}>
      <div className={styles.news__item__img}>
        <img
          src={img}
          alt={img}
        />
      </div>
            <p className={styles.news__item__title}>
               {title}
            </p>
    </div>
  );
};

export default News;
