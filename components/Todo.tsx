import { myTodo } from "../interfaces/myTodo";
import todo from "../store/todo";
import styles from "../styles/Todo.module.scss";
import cn from "classnames";

export default function Todo({ id, title, completed }: myTodo) {
  return (
    <div className={cn(styles.todo, { [styles.active]: completed })}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => todo.completeTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => todo.removeTodo(id)}>X</button>
    </div>
  );
}
