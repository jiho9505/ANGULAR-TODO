import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-todo-item-child",
  templateUrl: "./todo-item-child.component.html",
  styleUrls: ["./todo-item-child.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemChildComponent implements OnInit, DoCheck {
  constructor() {}
  ngDoCheck(): void {
    console.log("TodoItemChild do checks");
  }

  ngOnInit(): void {}
}
