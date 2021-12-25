import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodoContainerComponent } from "./components/todo-container/todo-container.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoFormComponent } from "./components/todo-form/todo-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormChildComponent } from "./components/form-child/form-child.component";
import { TodoItemChildComponent } from "./components/todo-item-child/todo-item-child.component";
import { UnrelatedParentComponent } from "./components/unrelated-parent/unrelated-parent.component";
import { UnrelatedChildComponent } from "./components/unrelated-child/unrelated-child.component";
import { FormChildOfChildComponent } from './components/form-child-of-child/form-child-of-child.component';

@NgModule({
  declarations: [
    TodoItemComponent,
    TodoContainerComponent,
    TodoListComponent,
    TodoFormComponent,
    FormChildComponent,
    TodoItemChildComponent,
    UnrelatedParentComponent,
    UnrelatedChildComponent,
    FormChildOfChildComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodoContainerComponent],
})
export class TodoModule {}
