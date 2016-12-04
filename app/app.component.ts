import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'bs-app',
  template: 'app.component.html',
})
export class AppComponent  {
  pageTitle: string = "Dev Book Store"

  showBook(): void{
  // method logic goes here
  }
 }

