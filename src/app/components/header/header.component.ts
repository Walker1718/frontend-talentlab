import { Component } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentTime$: Observable<Date>;

  constructor(){
    this.currentTime$ = interval(1000).pipe(map(() => new Date()));
  }
}
