import MainContainer from "../components/MainContainer";
import styles from "../styles/Counter.module.scss";
import counter from "../store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <MainContainer keywords="counter page" title="Счетчик на mobx">
      <h1>Счетчик</h1>
      <div className={styles.counter}>
        <div className={styles.count}>{"Count = " + counter.count}</div>
        <div className={styles.btns}>
          <button className={styles.btn} onClick={() => counter.decrement()}>
            -
          </button>
          <button className={styles.btn} onClick={() => counter.increment()}>
            +
          </button>
        </div>
      </div>
    </MainContainer>
  );
});

export default Counter;
