import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService<T> {
  // we only get the data after we subscribe
  private subject$ = new Subject<EmitEvent<T>>()
  constructor() { }

  emit(event: EmitEvent<T>) {
    this.subject$.next(event)
  }
  on(event: Events, dataToEmit: any): Subscription {
    return this.subject$
         .pipe(
               filter((e: EmitEvent<T>) => e.name === event),
               map((e: EmitEvent<T>) => e.value)
             )
         .subscribe(dataToEmit);
}
}
export class EmitEvent<T> {
  constructor(public name: Events, public value?: T) { }
}
export interface Testing {
  text1?: string
  text2?: string
}

export enum Events {
  testing,
  testing2
}