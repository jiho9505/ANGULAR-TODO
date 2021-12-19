import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent implements OnInit, DoCheck {
  /**
   * { updateOn: "blur", validators: [Validators.required] } 도 input 입력마다 cd 발생
   * updateOn: "blur"의 용도는 focus 벗어났을때의 단위로 폼 자체의 상태가 변경된다는 것
   * 다른 컴포넌트가 onPush여도 여기 cd 발생하니 그곳도 cd 발생
   */
  todoForm = this.fb.group({
    content: ["", Validators.required],
  });

  @Output() sendItemContent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    console.log("TodoFormComponent do check");
  }

  get content() {
    return this.todoForm.get("content") as AbstractControl;
    // this.todoForm.get("content") === this.todoForm.controls["content"]
  }

  onSubmit() {
    this.sendItemContent.emit(this.content.value);
    this.todoForm.reset();
  }

  /**
   * 에러처리
   * 폼 이벤트
   * 부모로 상태 전달
   * cd check
   */
}
