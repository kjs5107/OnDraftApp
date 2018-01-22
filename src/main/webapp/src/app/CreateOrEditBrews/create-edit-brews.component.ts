/**
 * Created by kylescagnelli on 1/17/18.
 */
import { Component } from '@angular/core';
import { CreateEditBrewsService } from "./create-edit-brews.service";

@Component({
  selector: 'create-edit-brews',
  templateUrl: './create-edit-brews.template.html',
  styleUrls: [
    './create-edit-brews.style.css'
  ]
})
export class CreateEditBrewsComponent {

  constructor(private createEditBrewsService:CreateEditBrewsService) {}

  // ngModel bindings for matInputs
  name:string = '';
  style:string = '';
  abv:string = '';
  ibu:string = '';
  brewSummary:string = '';
  // Note: typing in 'Dec 11' results in this: 'Tue Dec 11 2001 00:00:00 GMT-0500 (EST)'
  availStart:string = '';
  availEnd:string = '';

  // ngModel binding for mat-checkbox
  availNow:boolean = false;

}
