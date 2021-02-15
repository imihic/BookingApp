import {Component, OnInit} from '@angular/core';
import {Rent} from '../shared/rent.model';
import {RentService} from '../shared/rent.service';

@Component({
  selector: 'rent-listing',
  templateUrl: './rent-listing.component.html',
  styleUrls: ['./rent-listing.component.scss']
})


export class RentListingComponent implements OnInit{
  rents: Rent[]

  constructor(private rentService: RentService) {}

  ngOnInit() {
    this.rentService.getRental().subscribe((rents) => {
      this.rents = rents;
    });
  }

}
