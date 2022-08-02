import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[] = [];

  addTask(todo: Todo) {
    this.todos.push(todo);
    console.log(this.todos);
  }

  changeDoneFlag(index: number) {
    if (this.todos[index].done) {
      this.todos[index].done = false;
    } else {
      this.todos[index].done = true;
    }
    console.log(this.todos);
  }

  getDoneFlagByIndex(index: number) {
    return this.todos[index].done;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    console.log(this.todos);
  }
}
