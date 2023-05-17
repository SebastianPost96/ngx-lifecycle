import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EmitChanges } from 'projects/ngx-lifecycle/src/public-api';

@Component({
  selector: 'my-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnChanges {
  @Input() timer?: number;
  @Output() @EmitChanges ngxChanges!: EventEmitter<SimpleChanges>;

  ngOnChanges(changes: SimpleChanges): void {}
}
