import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'done',
  pure: false
})
export class DonePipe implements PipeTransform {

  transform(todos: Todo[], done: boolean): Todo[] {
    var output: Todo[] = [];
    todos.forEach(todo => {
      if (todo.done === done) {
        output.push(todo);
      }
    });

    return output;
  }

}
