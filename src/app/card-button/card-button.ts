import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  standalone: false,
  templateUrl: './card-button.html',
  styleUrl: './card-button.css'
})
export class CardButton {
  propTest: boolean = false;

  @Input({ transform: booleanAttribute}) buttonDisabled: boolean = false;

  @Output('buttonClick') buttonCLickEmitter = new EventEmitter<boolean>();

  onButtonClick(){
    console.log('onButtonClick')

    this.buttonCLickEmitter.emit(this.propTest);
  }
}
