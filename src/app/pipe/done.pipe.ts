import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'done'
})
export class DonePipe implements PipeTransform {

  transform(todos: Todo[]): Todo[] {
    
  }

}
