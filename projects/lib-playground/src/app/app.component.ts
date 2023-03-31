import { Component, Input, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @Input() nested!: boolean;
  @Input() test!: number;

  timer$ = interval(1000).pipe(takeWhile((x) => x < 5));

  log(text: string, changes?: SimpleChanges) {
    console.log('directive ' + text);
    if (changes) console.log(changes);
  }
}
