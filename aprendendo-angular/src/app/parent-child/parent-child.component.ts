import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  @ViewChild("stopwatch2")
  mytimer: TimerComponent;

  @ViewChild("myP")
  myp: ElementRef;

  constructor() { } 

  ngOnInit(): void {
  }

  start() {
    this.mytimer.start();
  }

  stop() {
    this.mytimer.stop();
  } 

  clear() {
    this.mytimer.clear();
  }

  ngAfterViewInit() {
    console.log(this.myp);
  }

}
