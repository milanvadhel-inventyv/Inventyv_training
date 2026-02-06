import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
 authService = inject(AuthService);
  router = inject(Router);

  logout(): void {
    this.authService.ClearToken();
    this.router.navigate([''], { replaceUrl: true }); // replaceUrl prevents back navigation
  }
}
