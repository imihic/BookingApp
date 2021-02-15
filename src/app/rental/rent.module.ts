import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {RentDetailComponent} from './rent-detail/rent-detail.component';
import {RentListingComponent} from './rent-listing/rent-listing.component';
import {RentComponent} from './rent.component';
import {RentService} from './shared/rent.service';
import {RentCardComponent} from '../shared/rent-card/rent-card.component';

const routes : Routes = [
  {path: 'rents', component: RentComponent, children: [
      {path: '', component: RentListingComponent},
      {path: ':id', component: RentDetailComponent}
      ]
  }
]

@NgModule({
  declarations: [
    RentComponent,
    RentDetailComponent,
    RentListingComponent,
    RentCardComponent
  ],
  imports: [
    RouterModule.forChild((routes)),
    CommonModule
  ],
  providers: [
    RentService
  ]
})
export class RentModule { }
