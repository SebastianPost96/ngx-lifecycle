import { Directive, Input, Output } from '@angular/core';
import { Watch, emitChanges } from 'projects/ngx-lifecycle/src/public-api';

@Directive({
  selector: '[appCompatibility]',
})
export class CompatibilityDirective {
  @Input() appCompatibility?: number;
  @Output() @Watch directiveChanges = emitChanges(this);
}
