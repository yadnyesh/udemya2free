import { Component } from '@angular/core';

@Component({
  selector: 'bs-app',
  template: `
    <h1>{{pageTitle}}</h1>
    <div>App Component Test</div>
    <bs-welcome></bs-welcome>
  `,
})
export class AppComponent  {
  pageTitle: string = "Dev Book Store"

  showBook(): void{
  // method logic goes here
  }
 }

