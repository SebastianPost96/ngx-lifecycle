import { EventEmitter, SimpleChanges } from '@angular/core';

const original = Symbol('ngxLifeCycleOnDestroy');

export function emitChanges(component: any): EventEmitter<SimpleChanges> {
  const eventEmitter = new EventEmitter<SimpleChanges>();
  const prototype = component.constructor.prototype;
  const onChanges = 'ngOnChanges';

  prototype[original] ??= prototype[onChanges];
  prototype[onChanges] = function (changes: SimpleChanges) {
    prototype[original].call(component, changes);
    eventEmitter.emit(changes);
  };

  return eventEmitter;
}
