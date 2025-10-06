import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class Card {
  @Input('planType') planType: string = '';
  @Input({alias: "planPrice", required:true}) planPrice: number = 0;
}
