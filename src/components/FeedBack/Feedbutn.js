import styles from "./FeedBack.module.scss";

const FeedbackButton = ({ option, Feedback }) => {
  return (
    <li>
      <button className={styles.Button} onClick={() => Feedback(option)}>
        {option}
      </button>
    </li>
  );
};

export default FeedbackButton;
