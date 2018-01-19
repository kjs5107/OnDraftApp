/**
 * Created by kylescagnelli on 1/17/18.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'brewery',
  templateUrl: './brewery.template.html',
  styleUrls: [
    './brewery.style.css'
  ]
})

export class BreweryComponent {

  // Brewery Profile ngModel bindings
  name:string = '';
  summary:string = '';
  address1:string = '';
  address2:string = '';
  city:string = '';
  state:string = '';
  zip:string = '';

  // Brewery Hours ngModel bindings
  mon:string = '';
  tues:string = '';
  wed:string = '';
  thur:string = '';
  fri:string = '';
  sat:string = '';
  sun:string = '';

}
