import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  DoCheck,
} from "@angular/core";

@Component({
  selector: "app-unrelated-parent",
  templateUrl: "./unrelated-parent.component.html",
  styleUrls: ["./unrelated-parent.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnrelatedParentComponent implements OnInit, DoCheck {
  constructor() {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    console.log("UnrelatedParent do checks");
  }
}
