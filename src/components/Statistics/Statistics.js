import styles from "./Statistics.module.scss";

const Statistics = ({ good, neutral, bad, total, PostitveFeedBack }) => {
  return (
    <ul>
      <li className={styles.LISTMAiN}>
        <p>Good:{good}</p>
      </li>
      <li className={styles.LISTMAiN}>
        <p>Neutral:{neutral}</p>
      </li>
      <li className={styles.LISTMAiN}>
        <p>Bad:{bad}</p>
      </li>
      <li className={styles.LISTMAiN}>
        <p className={styles.TOTAl}>total:{total}</p>
      </li>
      <li className={styles.LISTMAiN}>
        <p>Positive feedback:{PostitveFeedBack}%</p>
      </li>
    </ul>
  );
};

export default Statistics;
