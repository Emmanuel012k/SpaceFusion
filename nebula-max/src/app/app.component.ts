import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nebula-max';
  isLoading = false;

  handleSubmit() {
    this.isLoading = true;
    // Add your login logic here
    setTimeout(() => (this.isLoading = false), 2000);
  }
}
