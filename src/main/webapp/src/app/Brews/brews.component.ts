/**
 * Created by kylescagnelli on 1/17/18.
 */
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'brews',
  templateUrl: './brews.template.html',
  styleUrls: [
    './brews.style.css'
  ]
})
export class BrewsComponent {

  newInnerWidth:any = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.newInnerWidth = event.target.innerWidth;
    console.log(this.newInnerWidth);
  }


}
