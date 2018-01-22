/**
 * Created by kylescagnelli on 1/22/18.
 */
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class CreateEditBrewsService {

  public fromEditClick:boolean = false;
  public fromCreateClick:boolean = true;

  editClicked() {
    this.fromEditClick = !this.fromEditClick;
  }

  createClicked() {
    this.fromCreateClick = !this.fromCreateClick;
  }

}
