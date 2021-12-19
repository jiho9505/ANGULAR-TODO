import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-container",
  templateUrl: "./todo-container.component.html",
  styleUrls: ["./todo-container.component.css"],
})
export class TodoContainerComponent implements OnInit {
  todo: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addTodo(data: string): void {
    const newTodo = [...this.todo, data];
    this.todo = newTodo;
  }

  removeTodo(idx: number): void {
    const todoCopy = [...this.todo];
    todoCopy.splice(idx, 1);
    this.todo = todoCopy;
  }
}
