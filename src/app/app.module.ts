import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ZippyComponent } from "./zippy/zippy.component";
import { TodosComponent } from "./todos/todos.component";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LatestTodoComponent } from './latest-todo/latest-todo.component';
import { CustomTodoComponent } from './custom-todo/custom-todo.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, ZippyComponent, LatestTodoComponent, CustomTodoComponent],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
