import { Injectable } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[] = [];

  currentId: number = 1;

  addTask(name: string) {
    var todo: Todo = {
      id: this.currentId++,
      name: name,
      done: false
    }
    this.todos.push(todo);
    console.log(this.todos);
  }

  changeDoneFlag(id: number) {
    var index = this.todos.findIndex(list => list.id === id)
    if (this.todos[index].done) {
      this.todos[index].done = false;
    } else {
      this.todos[index].done = true;
    }
    console.log(this.todos);
  }

  getDoneFlagById(id: number) {
    return this.todos.find(list => list.id === id)?.done;
  }

  deleteTodo(id: number) {
    var index = this.todos.findIndex(list => list.id === id)
    this.todos.splice(index, 1);
    console.log(this.todos);
  }
}
