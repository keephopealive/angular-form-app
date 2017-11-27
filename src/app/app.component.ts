import { Task } from './task';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: Task;

  constructor() {
    this.newTask = new Task();
  }

  onSubmit() {
    console.log(this.newTask);
    this.newTask = new Task();
  }

}
