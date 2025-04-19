import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const userData = { email: this.email, password: this.password };
    this.http.post(`${environment.apiBaseUrl}/register`, userData).subscribe(
      (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']); // Redirect to login after successful registration
      },
      (error) => {
        console.error('Registration error', error);
      }
    );
  }

  onGoToLogin(): void {
    this.router.navigate(['/login']); // Navigates to the Login page
  }
}
