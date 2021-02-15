import {Component, OnInit} from '@angular/core';
import {Rent} from '../shared/rent.model';
import {RentService} from '../shared/rent.service';

import {RentalInterface} from '../shared/rental.interface';
import {AppStorage} from '../shared/rental.interface';

@Component({
  selector: 'rent-listing',
  templateUrl: './rent-listing.component.html',
  styleUrls: ['./rent-listing.component.scss']
})


export class RentListingComponent implements OnInit, RentalInterface{
  rents: Rent[] = []
  someData = 'Some data';
  isLoaded = false;

  constructor(private rentService: RentService) {}

  ngOnInit() {
    const appStorage = new AppStorage<number>();

    appStorage.addItem(10);
    appStorage.addItem(22);

    const item = appStorage.getItem(0);
    const items = appStorage.displayItems();

    this.rentService.getRental().subscribe((rents) => {
      this.rents = rents;
    });
  }

  implementMe(): string {
    return '';
  }
}
