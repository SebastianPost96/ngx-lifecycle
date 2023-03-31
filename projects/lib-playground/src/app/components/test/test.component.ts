import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { emitChanges } from 'projects/ngx-lifecycle/src/public-api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    AfterContentChecked,
    AfterContentInit,
    OnChanges
{
  @Input() timer?: number;
  @Output() ngxChanges = emitChanges(this);

  ngDoCheck(): void {
    this.log('do check');
  }
  ngOnDestroy(): void {
    this.log('destroy');
  }
  ngAfterViewInit(): void {
    this.log('view init');
  }
  ngAfterViewChecked(): void {
    this.log('view checked');
  }
  ngAfterContentChecked(): void {
    this.log('content checked');
  }
  ngAfterContentInit(): void {
    this.log('content init');
  }
  ngOnInit(): void {
    this.log('init');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.log('changes');
  }

  private log(text: string, changes?: SimpleChanges): void {
    console.log('component ' + text);
    if (changes) console.log(changes);
  }
}
