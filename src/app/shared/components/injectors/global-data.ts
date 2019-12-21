import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {State} from '@progress/kendo-data-query';

@Injectable({
  providedIn: 'root'
})
export class GlobalData {
  user: User = new User();
  gridState: State;
  isHeaderCollapsed = true;
  cacheMap: Map<string, any> = new Map<string, any>();
}
