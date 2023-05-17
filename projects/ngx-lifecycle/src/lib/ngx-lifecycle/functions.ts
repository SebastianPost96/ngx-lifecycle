import { EventEmitter, SimpleChanges } from '@angular/core';

const onChanges = 'ngOnChanges';

/**
 * Creates an EventEmitter that emits after `ngOnChanges` is called.
 * @example ＠Output() ＠EmitChanges ngxChanges: EventEmitter<SimpleChanges>;
 */
export function EmitChanges(prototype: any, propertyKey: string): void {
  prototype[onChanges] ??= function () {};

  const key = Symbol('Ngx Change Emitter');
  Object.defineProperty(prototype, propertyKey, {
    get() {
      if (!this[key]) {
        const eventEmitter = new EventEmitter<SimpleChanges>();
        this[onChanges] = function (changes: SimpleChanges) {
          this.constructor.prototype[onChanges].call(this, changes);
          eventEmitter.emit(changes);
        };
        this[key] = eventEmitter;
      }
      return this[key];
    },
  });
}
