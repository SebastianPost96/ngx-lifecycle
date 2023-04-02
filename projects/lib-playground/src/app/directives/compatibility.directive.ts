import {
  Directive,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Watch, emitChanges } from 'projects/ngx-lifecycle/src/public-api';

@Directive({
  selector: '[appCompatibility]',
})
export class CompatibilityDirective implements OnChanges {
  @Input() appCompatibility?: number;
  @Output() @Watch directiveChanges = emitChanges(this);

  ngOnChanges(changes: SimpleChanges): void {
    console.log('internal directive changes', changes);
  }
}
