import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  cardPlanType: string = 'Simples';
  cardPlanPrice:number = 100;
}
