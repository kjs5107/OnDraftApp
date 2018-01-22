/**
 * Created by kylescagnelli on 1/17/18.
 */
import { Component, HostListener } from '@angular/core';
import { CreateEditBrewsService } from "../CreateOrEditBrews/create-edit-brews.service";

@Component({
  selector: 'brews',
  templateUrl: './brews.template.html',
  styleUrls: [
    './brews.style.css'
  ]
})
export class BrewsComponent {

  newInnerWidth:any = window.innerWidth;

  constructor(private createEditBrewsService:CreateEditBrewsService) {
    if (createEditBrewsService.fromCreateClick) {
      createEditBrewsService.createClicked();
    }
    if(createEditBrewsService.fromEditClick) {
      createEditBrewsService.editClicked();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;
    console.log(this.newInnerWidth);
  }

  enableFromCreateButton() {
    this.createEditBrewsService.createClicked();
  }

  enableFromEditButton() {
    this.createEditBrewsService.editClicked();
  }


}
