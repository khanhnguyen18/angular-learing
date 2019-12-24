import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  private data = of([
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'porsche',
    model: 'macan'
  },
  {
    brand: 'ferarri',
    model: '458'
  },
  {
    brand: 'lamborghini',
    model: 'urus'
  }
  ]);

  constructor() { }

  ngOnInit() {
    this.data.pipe(
      map(cars => cars.filter(car => car.brand === 'porsche'))
    ).subscribe(cars => console.log(cars))
  }
}