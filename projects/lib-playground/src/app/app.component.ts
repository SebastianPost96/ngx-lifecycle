import { Component, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  timer$ = interval(1000).pipe(takeWhile((x) => x <= 10));

  log(text: string, changes?: SimpleChanges) {
    console.log(text);
  }
}
