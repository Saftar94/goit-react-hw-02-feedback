import FeedbackItem from "./Feedbutn.js";
import styles from "./FeedBack.module.scss";
import { nanoid } from "nanoid";

const FeedbackList = ({ options, Feedback }) => {
  return (
    <ul className={styles.List}>
      {options.map((option) => (
        <FeedbackItem key={nanoid()} option={option} Feedback={Feedback} />
      ))}
    </ul>
  );
};

export default FeedbackList;
