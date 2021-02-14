import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RentDetailComponent} from './rent-detail/rent-detail.component';
import {RentListingComponent} from './rent-listing/rent-listing.component';
import {RentComponent} from './rent.component';

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
    RentListingComponent
  ],
  imports: [
    RouterModule.forChild((routes)),
  ]
})
export class RentModule { }
