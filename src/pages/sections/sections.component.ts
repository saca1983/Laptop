import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sections',
  standalone: true,
  imports: [],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {

  constructor(private router: Router) {}

  onLogin() {
    this.router.navigate(['/state']);
  }

}
