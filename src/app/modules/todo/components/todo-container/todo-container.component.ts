import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-container",
  templateUrl: "./todo-container.component.html",
  styleUrls: ["./todo-container.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

/**
 * addTodo / removeTodo 는 뷰와 직접적 관련이 있지 않기 때문에 실제론 서비스에서 관리해야한다.
 * http 요청으로 구현이 될것이고 loadTodo라는 메서드도 있어야한다.
 * 여기선 그냥 컴포넌트에 로직을 뒀다.
 */
