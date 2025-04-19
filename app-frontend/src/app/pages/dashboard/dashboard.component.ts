import { Component, OnInit } from '@angular/core';
import { SalesforceService } from '../../services/salesforce.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  standalone: true,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accounts: any[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  page: number = 1;
  pageSize: number = 5;
  noMoreRecords: boolean = false;

  constructor(private salesforceService: SalesforceService, private router: Router) { }

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts() {
    this.loading = true; // Start loading
    this.errorMessage = ''; // Reset error message
    if (typeof window !== 'undefined') {
      this.salesforceService.getAccounts(this.page, this.pageSize).subscribe(
        (data) => {
          if (data.length == 0) {
            this.noMoreRecords = true;
            this.page--;
          } else {
            this.accounts = data;
            this.noMoreRecords = false;
          }
          this.loading = false;
          this.errorMessage = '';
        },
        (error) => {
          console.error('Error fetching accounts:', error);
          this.loading = false;
          this.errorMessage = '⚠️ Failed to load accounts. Please try again later.';
        }
      );
    }
  }


  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token'); // Remove token
      this.router.navigate(['/login']); // Redirect to Login page
    }
  }

  nextPage() {
    if (!this.noMoreRecords) {
      this.page++;
      this.loadAccounts();
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.noMoreRecords = false;
      this.loadAccounts();
    }
  }

  connectToSalesforce() {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = `http://localhost:5000/oauth/login?token=${token}`;
    } else {
      console.error('No token found');
    }
  }
}