import { Component, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { ErrorNotificationComponent } from './component/error-notification/error-notification.component';
import { SuccessNotificationComponent } from './component/success-notification/success-notification.component';
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

  @ViewChild('container', { read: ViewContainerRef, static: true })
  private container!: ViewContainerRef

  constructor ( private todoService: TodosService) {}



  private renderComponent(messege: string, type: string = "succes") {
    this.container.clear();
    var component;
    if (type == "succes") {
      component = SuccessNotificationComponent;
    } else {
      component = ErrorNotificationComponent;
    }

    const componentRef = this.container.createComponent(component);
    componentRef.instance.message = messege;
  }

  add() {
    var value = this.todo.nativeElement.value;
    if (value.length >= 5) {
      this.todoService.addTask(value);
      this.renderComponent("Dodano pomyślnie", "succes");
    } else {
      this.renderComponent("Todo powinno mieć min. 5 znaków", "error");
    }
    this.todo.nativeElement.value = "";
  }

  clear() {
    this.container.clear();
  }
}
