import { EventEmitter, SimpleChanges } from '@angular/core';

const original = Symbol('ngxLifeCycleOnDestroy');

/**
 * Creates an EventEmitter that emits when `ngOnChanges` function would normally be called.
 * @param component The component in which the EventEmitter is created.
 * @example ＠Output() ngxChanges = emitChanges(this);
 * @returns The created EventEmitter
 */
export function emitChanges(component: object): EventEmitter<SimpleChanges> {
  const eventEmitter = new EventEmitter<SimpleChanges>();
  const prototype = component.constructor.prototype;
  const onChanges = 'ngOnChanges';

  prototype[original] ??= prototype[onChanges];
  prototype[onChanges] = function (changes: SimpleChanges) {
    prototype[original]?.call(component, changes);
    eventEmitter.emit(changes);
  };

  return eventEmitter;
}
