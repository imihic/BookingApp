import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {RentDetailComponent} from './rent-detail/rent-detail.component';
import {RentListingComponent} from './rent-listing/rent-listing.component';
import {RentComponent} from './rent.component';
import {RentService} from './shared/rent.service';
import {RentCardComponent} from '../shared/rent-card/rent-card.component';
import {UppercasePipe} from '../shared/pipes/uppercase.pipe';

import {HighlightDirective} from '../shared/directives/custom.directive';

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
    RentCardComponent,
    UppercasePipe,
    HighlightDirective
  ],
  imports: [
    RouterModule.forChild((routes)),
    CommonModule,
    HttpClientModule
  ],
  providers: [
    RentService
  ]
})
export class RentModule { }
