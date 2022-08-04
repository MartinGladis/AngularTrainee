import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RendererNotyficationService } from 'src/app/service/renderer-notyfication/renderer-notyfication.service';
import { TodosService } from 'src/app/service/todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Output() outputMessage = new EventEmitter<{message: string, type: string}>();

  constructor (private todoService: TodosService, private renderService: RendererNotyficationService) {}

  get getTodoList() {
    return this.todoService.todos;
  }

  changeState(id: number) {
    this.todoService.changeDoneFlag(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    var parameters = {
      message: "Todo usunięty",
      type: "success"
    }
    this.outputMessage.emit(parameters);
  }

}
