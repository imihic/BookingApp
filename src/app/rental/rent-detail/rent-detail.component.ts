import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'rent-detail',
  templateUrl: './rent-detail.component.html',
  styleUrls: ['./rent-detail.component.scss']
})
export class RentDetailComponent {
  rentId = '';
  //DEPENDANCY INJECTION
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.rentId = params['id'];
    })
  }
}
