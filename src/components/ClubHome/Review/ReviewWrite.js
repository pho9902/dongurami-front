import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewWrite.module.scss";
import { AiFillStar } from "react-icons/ai";

export const ReviewWrite = () => {
  return (
    <div className={styles.write}>
      <div className={styles.star}>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </div>
      <div className={styles.comment}>
        <input />
        <button>등록</button>
      </div>
    </div>
  );
};

export default ReviewWrite;