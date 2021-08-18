import { makeAutoObservable } from "mobx";
import { myTodo } from "../interfaces/myTodo";

class Todo {
  todos: myTodo[] = [
    { id: 991, title: "Написать код", completed: true },
    { id: 992, title: "Запустить код", completed: false },
    { id: 993, title: "Проверить код", completed: false },
    { id: 994, title: "Залить код на GitHub", completed: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  fetchTodo() {
    fetch(`${process.env.API_URL}/todos`)
      .then((response) => response.json())
      .then((data) => (this.todos = [...this.todos, ...data]));
  }
}

export default new Todo();
