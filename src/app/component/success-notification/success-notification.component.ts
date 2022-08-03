import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-notification',
  templateUrl: './success-notification.component.html',
  styleUrls: ['./success-notification.component.scss']
})
export class SuccessNotificationComponent{

  constructor() { }

  @Input() message!: string;
  
}
