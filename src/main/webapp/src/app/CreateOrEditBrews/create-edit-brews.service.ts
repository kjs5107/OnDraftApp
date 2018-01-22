/**
 * Created by kylescagnelli on 1/22/18.
 */
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable'


@Injectable()
export class CreateEditBrewsService {

  fromEditClick:boolean = false;
  fromCreateClick:boolean = false;

}
