import { Component, OnInit } from "@angular/core";
import { slide } from "../app.animations";

@Component({
  selector: "latest-todo",
  templateUrl: "./latest-todo.component.html",
  styleUrls: ["./latest-todo.component.css"],
  animations: [slide]
})
export class LatestTodoComponent {
  items: any[] = [
    "Wash the dishes",
    "Call the accountant",
    "Apply for a car insurance"
  ];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = "";
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
