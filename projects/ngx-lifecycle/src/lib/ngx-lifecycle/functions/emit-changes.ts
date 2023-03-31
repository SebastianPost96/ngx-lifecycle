import { EventEmitter, SimpleChanges, Type } from '@angular/core';

export function emitChanges(component: unknown): EventEmitter<SimpleChanges> {
  const eventEmitter = new EventEmitter<SimpleChanges>();

  return eventEmitter;
}
