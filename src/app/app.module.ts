import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TodoComponent } from './component/todo/todo.component';
import { MatIconModule } from '@angular/material/icon';
import { DonePipe } from './pipe/done.pipe';
import { SuccessNotificationComponent } from './component/success-notification/success-notification.component';
import { ErrorNotificationComponent } from './component/error-notification/error-notification.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    DonePipe,
    SuccessNotificationComponent,
    ErrorNotificationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
