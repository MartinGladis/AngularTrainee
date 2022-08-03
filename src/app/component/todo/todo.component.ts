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

  changeState(id: number) {
    this.service.changeDoneFlag(id);
  }

  deleteTodo(id: number) {
    this.service.deleteTodo(id);
  }

}
