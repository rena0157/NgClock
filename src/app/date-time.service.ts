import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  private clock: Observable<number>;

  constructor() {
    this.clock = interval(50).pipe(map(val => Date.now()))
  }

  toSecondsPercent(time: number) {
    return (1 - (Math.ceil(time / 60000.0) - (time / 60000.0))) * 100
  }

  toMinutesPercent(time: number) {
    return (1 - (Math.ceil(time / 3.6e+6) - (time / 3.6e+6))) * 100;
  }

  toHoursPercent(time: number) {
    return (Math.ceil(time / 8.64e+7) - (time / 8.64e+7)) * 100
  }

  toDayPercentage(time: number) {
    return (Math.ceil(time / 2.628e+9) - (time / 2.628e+9)) * 100
  }

  getDateTime() : Observable<number> {
    return this.clock;
  }
}
