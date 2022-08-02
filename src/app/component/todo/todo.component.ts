import { Component } from '@angular/core';
import { TodosService } from 'src/app/service/todo/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor (private service: TodosService) {}

  get getTodoList() {
    return this.service.todos;
  }

  getIconName(index: number) : string {
    if (this.service.getDoneFlagByIndex(index)) {
      return "check_circle";
    } else {
      return "radio_button_unchecked";
    }
  }

  changeState(index: number) {
    this.service.changeDoneFlag(index);
  }

  deleteTodo(index: number) {
    this.service.deleteTodo(index);
  }

}
