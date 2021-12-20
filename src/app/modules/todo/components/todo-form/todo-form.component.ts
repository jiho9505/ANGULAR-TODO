import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  /**
   * onPush로 처리해도 CD발생시 해당 컴포넌트만이 아닌 전체가 CD 된다.
   */
  onSubmit() {
    this.sendItemContent.emit(this.content.value);
    this.todoForm.reset();
  }
}
/**
 * input 이벤트가 발생해서 fb의 formcontorl이 바뀌어 로직들의 재할당이 일어날거라 생각하겠지만 아니다!
 * CD만 수행됩니다. 리렌더링이 안일어난다고 보면 될거같다.
 * 다만 CD 자체를 줄일 수 없을까?
 */
