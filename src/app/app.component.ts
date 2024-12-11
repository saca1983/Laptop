import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SectionsComponent } from '../pages/sections/sections.component';
import { StateComponent } from '../pages/state/state.component';
import { PlanComponent } from '../pages/plan/plan.component';
import { RecoveryComponent } from '../pages/recovery/recovery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, LoginComponent, SectionsComponent, StateComponent, PlanComponent, RecoveryComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Laptop';
}
