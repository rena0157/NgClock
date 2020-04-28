import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clock-bar',
  templateUrl: './clock-bar.component.html',
  styleUrls: ['./clock-bar.component.scss']
})
export class ClockBarComponent implements OnInit {

  constructor() { }

  @Input() public percent: number;

  @Input() public text: string;

  ngOnInit(): void {
  }

}
