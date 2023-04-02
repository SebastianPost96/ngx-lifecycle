import { EventEmitter, SimpleChanges } from '@angular/core';

const onChanges = 'ngOnChanges';

/**
 * Creates an EventEmitter that emits after `ngOnChanges` is called.
 * @param component The component or directive calling this function.
 * @example ＠Output() ＠Watch ngxChanges = emitChanges(this);
 * @returns The created EventEmitter.
 */
export function emitChanges(component: any): EventEmitter<SimpleChanges> {
  const eventEmitter = new EventEmitter<SimpleChanges>();

  component[onChanges] = function (changes: SimpleChanges) {
    component.constructor.prototype[onChanges].call(component, changes);
    eventEmitter.emit(changes);
  };

  return eventEmitter;
}

/**
 * Tells Angular that the component or directive should listen to input changes.
 *
 * If the component already implements `OnChanges`, this decorator is not needed.
 */
export function Watch(prototype: any, propertyKey: string): void {
  prototype[onChanges] ??= function () {};
}
