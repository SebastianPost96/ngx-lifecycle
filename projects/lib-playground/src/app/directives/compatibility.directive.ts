import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { EmitChanges } from 'projects/ngx-lifecycle/src/public-api';

@Directive({
  selector: '[appCompatibility]',
})
export class CompatibilityDirective implements OnChanges {
  @Input() appCompatibility?: number;
  @Output() @EmitChanges directiveChanges!: EventEmitter<SimpleChanges>;

  ngOnChanges(changes: SimpleChanges): void {}
}
