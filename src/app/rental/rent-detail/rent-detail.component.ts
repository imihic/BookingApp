import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RentService} from '../shared/rent.service';
import {Rent} from '../shared/rent.model';

@Component({
  selector: 'rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.scss']
})
export class RentDetailComponent {
  rent: Rent;

  //DEPENDANCY INJECTION
  constructor(private rentService: RentService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.rentService.getRentById(params['id']).subscribe(rent => {
        this.rent = rent;
      })
    })
  }
}
