import { EventEmitter, SimpleChanges } from '@angular/core';

const original = Symbol('ngxLifeCycleOnDestroy');

/**
 * Creates an EventEmitter that emits after `ngOnChanges` is called.
 * @param component The component or directive calling this function.
 * @example ＠Output() ngxChanges = emitChanges(this);
 * @returns The created EventEmitter.
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
