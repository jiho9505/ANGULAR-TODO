import { Component, DoCheck, OnInit } from "@angular/core";

@Component({
  selector: "app-form-child-of-child",
  templateUrl: "./form-child-of-child.component.html",
  styleUrls: ["./form-child-of-child.component.css"],
})
export class FormChildOfChildComponent implements OnInit, DoCheck {
  constructor() {}
  ngDoCheck(): void {
    console.log("FormChildOfChild do checks");
  }

  ngOnInit(): void {}
}
