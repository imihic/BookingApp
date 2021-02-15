import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rent} from './rent.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RentService {

  constructor(private http: HttpClient) {
  }

  //generic type observable
  public getRental(): Observable<Rent[]> {
    return this.http.get<Rent[]>('http://localhost:4200/api/v1/rentals/')
  }

  public getRentById(rentId: string): Observable<Rent>{
    return this.http.get<Rent>(`http://localhost:4200/api/v1/rentals/${rentId}`);
  }
}

