import { Component, Input, ViewEncapsulation } from '@angular/core';

function handlePlanType(value: string) {
  console.log('handlePlanType', value);
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class Card {
  @Input({ alias: 'planPrice', required: true }) planPrice: number = 0;

  @Input({ alias: 'planType', transform: (value: string) => handlePlanType(value) }) planType: string = '';

  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted);
    console.log('planType', this.planType);
  }
}
