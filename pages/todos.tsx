import { observer } from "mobx-react-lite";
import MainContainer from "../components/MainContainer";
import Todo from "../components/Todo";
import { myTodo } from "../interfaces/myTodo";
import todo from "../store/todo";
import styles from "../styles/TodoPage.module.scss";

const Todos = observer(() => {
  return (
    <MainContainer keywords="todos page" title="Список дел">
      <h1>Список дел</h1>
      <div className={styles.todos}>
        <button className={styles.btn} onClick={() => todo.fetchTodo()}>
          Получить много дел
        </button>
        {todo.todos.map((item: myTodo) => (
          <Todo
            id={item.id}
            title={item.title}
            completed={item.completed}
            key={item.id}
          />
        ))}
      </div>
    </MainContainer>
  );
});

export default Todos;
