import {
  Component,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Watch, emitChanges } from 'projects/ngx-lifecycle/src/public-api';

@Component({
  selector: 'my-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnChanges {
  @Input() timer?: number;
  @Output() @Watch ngxChanges = emitChanges(this);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('internal component changes', changes);
  }
}
