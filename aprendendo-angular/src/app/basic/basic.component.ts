import { ObserversModule } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';

import { interval, observable, Observable, Subscription } from 'rxjs';
import { Observer } from 'rxjs/internal/types';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  subscription1: Subscription;
  subscription2: Subscription;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  constructor() { }

  ngOnInit(): void {
    this.s1 = 'Initializing...';
    this.s2 = 'Initializing...';
    const myFirstObservable = new Observable(
      (observer: Observer<number>) => {
        observer.next(1); 
        observer.next(2); 
        observer.next(3); 
        observer.next(4); 
        observer.next(5); 
        observer.error("Error"); 
        observer.complete();
      }
    );

    myFirstObservable.subscribe(
      (n: number) => console.log(n),
      (error) => console.log(error),
      () => console.log('Completed.')
    );

    // const timerCount = interval(500);
    // timerCount.subscribe(
    //   (n) => console.log(n)
    // )
    // console.log("after interval");

    const myIntervalObservable = new Observable(
      (observer: Observer<any>) => {
        let i: number = 0;
        let id = setInterval(() => {
          i++;
          console.log('from Observable: ', i);
          if(i == 10) {
            observer.complete();
          } else if(i%2 == 0) {
            observer.next(i);
          }
        }, 1000);
        return () => {
          clearInterval(id);
        }
      }
    );

    this.subscription1 = myIntervalObservable.subscribe(
      (_n) => {this.n1 = _n},
      (error) => {this.s1 = 'Error: ' + error},
      () => {this.s1 = 'Completed'}
    )


    this.subscription2 = myIntervalObservable.subscribe(
      (_n) => {this.n2 = _n},
      (error) => {this.s2 = 'Error: ' + error},
      () => {this.s2 = 'Completed'}
    )

    setTimeout(() => {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
    }, 15000);

  }

}
