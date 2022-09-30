// This is basically the structure for every component in Angular

import { Component } from '@angular/core';

// This is the Declaration of the Component
@Component({
  selector: 'app-root', //The HTML tag of the component. This is how you import into another component
  templateUrl: './app.component.html', //the HTML file
  styleUrls: ['./app.component.scss'], //the CSS file
})

// This is the Class of the Component
export class AppComponent {
  name = 'Bilend';
  greetUser() {
    return `Hello ${this.name} you are a big horse`;
  }
}
