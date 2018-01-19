/**
 * Created by kylescagnelli on 1/17/18.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'brews',
  templateUrl: './brews.template.html',
  styleUrls: [
    './brews.style.css'
  ]
})
export class BrewsComponent {

  verticallyAlign(): string {
    //TODO: replace 'brewX' with 'brew' + index to this getElementById when database connection is all hooked up
    console.log(document.getElementById('brewX').offsetHeight / 4 + 'px;');
    return document.getElementById('brewX').offsetHeight / 4 + 'px';
  }

}
