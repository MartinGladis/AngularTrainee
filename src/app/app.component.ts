import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodosService } from './service/todo/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do-project';

  @ViewChild('todo')
  todo!: ElementRef;

  constructor (private service: TodosService) {}

  add() {
    this.service.addTask({
      name: this.todo.nativeElement.value, 
      done: false
    });
    this.todo.nativeElement.value = "";
  }
}
