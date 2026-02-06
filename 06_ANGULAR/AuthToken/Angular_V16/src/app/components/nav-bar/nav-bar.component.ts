import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
authService = inject(AuthService);
  router = inject(Router);

  logout(): void {
    this.authService.ClearToken();
    this.router.navigate([''], { replaceUrl: true }); // replaceUrl prevents back navigation
  }
}
