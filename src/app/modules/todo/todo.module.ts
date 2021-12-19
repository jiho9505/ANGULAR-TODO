import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoContainerComponent } from "./components/todo-container/todo-container.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TodoItemComponent,
    TodoContainerComponent,
    TodoListComponent,
    TodoFormComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoContainerComponent],
})
export class TodoModule {}
