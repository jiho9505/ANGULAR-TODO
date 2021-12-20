import { Component, OnInit, Input, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit, AfterViewInit {
  @Input() item = "";
  @Input() index = 0;

  constructor() {
    console.log("re-allocation");
  }

  ngOnInit(): void {
    console.log("re-allocation");
  }

  ngAfterViewInit(): void {
    console.log("re-allocation");
  }
}
/**
 * 1.컴포넌트마다 onPush 해주는 습관 필요
 * 2.템플릿이 참조하는 멤버변수가 리렌더링의 기준이긴 하나 실제론 todolist가 아닌
 * todoItem에서 재할당이 이뤄지고 있음 (ngFor을 써서 실제 대상이 item이라 그런가)
 * 여튼 리렌더링이 어느정도 범위가 되는지까지는 몰라도 될 것 같으며
 * 변화가 생기는 곳엔 재할당(컴포넌트 초기화) 및 리렌더링이 일어난다는것을 알아두자!
 */
