import React from "react";
import styles from "../../../styles/Club/Home/Review/ReviewWrite.module.scss";
import { AiFillStar, AiOutlineStar, AiFillEdit } from "react-icons/ai";
import { BiRevision } from "react-icons/bi";
const ReviewWrite = ({
  onReviewInput,
  onReviewSubmit,
  onStarHandleFalse,
  onStarHandleTrue,
  starState,
  isReviewMine,
  onReviewUpdate,
}) => {
  return (
    <div className={styles.write}>
      <div className={styles.star}>
        {starState.map((el, i) => {
          return el ? (
            <AiFillStar key={i} onClick={() => onStarHandleFalse(i)} />
          ) : (
            <AiOutlineStar key={i} onClick={() => onStarHandleTrue(i)} />
          );
        })}
      </div>
      <div className={styles.comment}>
        <input onChange={onReviewInput} />
        {isReviewMine ? (
          <button onClick={onReviewUpdate}>
            <BiRevision size={20} />
          </button>
        ) : (
          <button onClick={onReviewSubmit}>
            <AiFillEdit size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewWrite;
