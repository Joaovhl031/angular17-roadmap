import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.html',
  styleUrl: './card.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class Card {
  plano = {
    infos: {
      tipo: 'Simples',
      preco: 'R$ 100,00/Mes',
    },
  };
}
