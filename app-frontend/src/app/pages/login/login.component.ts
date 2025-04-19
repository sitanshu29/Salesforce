import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        // User is already logged in
        this.router.navigate(['/dashboard']);
      }
    }
  }

  onSubmit() {
    const payload = { email: this.email, password: this.password };

    this.http.post<any>('http://localhost:5000/login', payload)
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error: (error: any) => {
          alert('Login failed. Please check your credentials.');
          console.error(error);
        }
      });
  }

  onGoToRegister(): void {
    this.router.navigate(['/register']); // Navigates to the Register page
  }
}
