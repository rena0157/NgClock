import { Component, OnInit } from '@angular/core';
import { DateTimeService } from './date-time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public currentTime: number;

  public secondsPercentage: number;

  public minutesPercentage: number;

  public hourPercentage: number;

  public dayPercentage: number;

  constructor(private dateTimeService: DateTimeService) {
  }

  ngOnInit(): void {
    this.dateTimeService
    .getDateTime()
    .subscribe(val => {
      this.currentTime = val;

      this.secondsPercentage = this.dateTimeService
        .toSecondsPercent(this.currentTime);

      this.minutesPercentage = this.dateTimeService
        .toMinutesPercent(this.currentTime)

      this.hourPercentage = this.dateTimeService
        .toHoursPercent(this.currentTime);

      this.dayPercentage = this.dateTimeService
        .toDayPercentage(this.currentTime);

    });
  }

}
