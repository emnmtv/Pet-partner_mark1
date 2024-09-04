import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  onSubmit(): void {
    if (this.email && this.password) {
      // Perform registration logic
      console.log('Email:', this.email);
      console.log('Password:', this.password);
      // You might want to send this data to a backend service here
    } else {
      console.log('Please fill out all fields');
    }
  }
}
