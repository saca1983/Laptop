import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-state',
  standalone: true,
  imports: [],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/plan']);
  }

}
