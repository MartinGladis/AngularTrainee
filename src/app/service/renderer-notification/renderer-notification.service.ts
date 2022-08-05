import { Injectable } from '@angular/core';
import { ErrorNotificationComponent } from 'src/app/component/error-notification/error-notification.component';
import { SuccessNotificationComponent } from 'src/app/component/success-notification/success-notification.component';

@Injectable({
  providedIn: 'root'
})
export class RendererNotificationService {

  constructor() { }

  renderComponent(container: any, message: string, type: string = "success") {
    container.clear();
    var component;
    if (type == "success") {
      component = SuccessNotificationComponent;
    } else {
      component = ErrorNotificationComponent;
    }

    const componentRef = container.createComponent(component);
    componentRef.instance.message = message;
  }

}
