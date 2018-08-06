import { Component } from "@angular/core";
import { fade } from "../app.animations";

@Component({
  selector: "todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"],
  animations: [
    fade
    // trigger("fade", [
    //   transition("void=>*", [
    //     //style({ backgroundColor: "yellow", opacity: 0 }),
    //     // animate(3000, style({ backgroundColor: "white", opacity: 1 }))
    //     style({ opacity: 0 }),
    //     animate(2000)
    //   ]),
    //   transition("*=>void", [animate(1000, style({ opacity: 0 }))])
    // ])
    // trigger("fade", [
    //   state("void", style({ opacity: 0 })),
    //   //different types of syntaxes for transition
    //   // transition("void=>*,*=>void", animate(2000))
    //   //transition("void<=>*", animate(2000))
    //   transition(":enter,:leave", [animate(2000)])
    // ])
  ]
})
export class TodosComponent {
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
