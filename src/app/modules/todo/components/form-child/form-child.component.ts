import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  OnInit,
} from "@angular/core";

@Component({
  selector: "app-form-child",
  templateUrl: "./form-child.component.html",
  styleUrls: ["./form-child.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * CD 발생 테스트용
 */
export class FormChildComponent implements OnInit, DoCheck {
  constructor() {}
  ngDoCheck(): void {
    console.log("form-child do checks");
  }

  ngOnInit(): void {}
}
