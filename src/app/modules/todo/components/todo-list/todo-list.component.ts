import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit, DoCheck {
  @Input() todolist: string[] = [];
  @Output() sendItemIdx = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log("todolist docheck");
  }

  onClickRemoveBtn(event: MouseEvent) {
    if (!(event.target instanceof HTMLElement)) return;
    if (event.target.className === "item-removeBtn") {
      const content = Number(event.target.dataset["idx"]);
      this.sendItemIdx.emit(content);
    }
  }
}
