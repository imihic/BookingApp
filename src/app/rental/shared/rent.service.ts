import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rent} from './rent.model';

@Injectable()
export class RentService {
  rents: Rent[] = [
    {
      _id: '1',
      title: 'Stan Maksimir',
      city: 'Zagreb',
      street: 'Maksimirska 234',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 3,
      description: 'Very good apartment',
      price: 50,
      shared: false,
      createdAt: '01/02/2021'
    },
    {
      _id: '2',
      title: 'Stan Maksimir',
      city: 'Zagreb',
      street: 'Maksimirska 234',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 3,
      description: 'Very good apartment',
      price: 50,
      shared: false,
      createdAt: '01/02/2021'
    },
    {
      _id: '3',
        title: 'Stan Maksimir',
      city: 'Zagreb',
      street: 'Maksimirska 234',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      numOfRooms: 3,
      description: 'Very good apartment',
      price: 50,
      shared: false,
      createdAt: '01/02/2021'
    }]

  //generic type observable
  public getRental(): Observable<Rent[]> {
    return new Observable(observer => {
      setTimeout(() => {observer.next(this.rents)}, 100)
    })
  }
}

