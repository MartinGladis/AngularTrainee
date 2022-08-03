import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-notification',
  templateUrl: './error-notification.component.html',
  styleUrls: ['./error-notification.component.scss']
})
export class ErrorNotificationComponent{

  constructor() { }

  @Input() message!: string;

}
