import {Component, Input} from '@angular/core';

@Component({
  selector: 'rent-card',
  templateUrl: './rent-card.component.html',
  styleUrls: ['./rent-card.component.scss']
})
export class RentCardComponent {
  @Input() rent;
}
