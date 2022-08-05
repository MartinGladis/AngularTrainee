import { Component, ViewChild, ElementRef, ViewContainerRef } from '@angular/core';
import { RendererNotificationService } from './service/renderer-notification/renderer-notification.service';
import { TodoService as TodoService } from './service/todo/todo.service';

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

  constructor ( private todoService: TodoService, private rendererService: RendererNotificationService) {}

  add() {
    var value = this.todo.nativeElement.value;
    if (value.length >= 5) {
      this.todoService.addTask(value);
      this.rendererService.renderComponent(this.container, "Dodano pomyślnie", "success");
    } else {
      this.rendererService.renderComponent(this.container, "Todo powinno mieć min. 5 znaków", "error");
    }
    this.todo.nativeElement.value = "";
  }

  clear() {
    this.container.clear();
  }

  renderOutputNotification(event: any) {
    var message = event.message;
    var type = event.type;
    this.rendererService.renderComponent(this.container, message, type);
  }
}
