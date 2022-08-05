import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RendererNotificationService } from 'src/app/service/renderer-notification/renderer-notification.service';
import { TodoService } from 'src/app/service/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  @Output() outputMessage = new EventEmitter<{message: string, type: string}>();

  constructor (private todoService: TodoService, private renderService: RendererNotificationService) {}

  get getTodoList() {
    return this.todoService.todos;
  }

  changeState(id: number) {
    this.todoService.changeDoneFlag(id);
    if (this.todoService.getDoneFlagById(id)) {
      this.outputMessage.emit({
        message: "Todo done",
        type: "success"
      });
    }
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
