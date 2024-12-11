import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/recovery']);
  }

}
