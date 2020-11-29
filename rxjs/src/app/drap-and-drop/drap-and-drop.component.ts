import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drap-and-drop',
  templateUrl: './drap-and-drop.component.html',
  styleUrls: ['./drap-and-drop.component.css']
})
export class DrapAndDropComponent implements OnInit {

  @ViewChild('myrect') myrect: ElementRef;

  top: number = 40;
  left: number = 40;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit () {
    let mousedown = fromEvent(this.myrect.nativeElement, 'mousedown');
    let mousemove = fromEvent(document, 'mousemove');
    let mouseup = fromEvent(document, 'mouseup');

    mousedown.subscribe((ed: MouseEvent) => {
      // console.log(ed);
      let x = ed.pageX;
      let y = ed.pageY;

      mousemove
      .pipe(
        takeUntil(mouseup)
      )
      .subscribe((em: MouseEvent) => {
        // console.log(em);
        let offsetx = x - em.pageX;
        let offsety = y - em.pageY;
        this.top -= offsety;
        this.left -= offsetx;
 
        x = em.pageX; 
        y = em.pageY;
      })
    })


  }
 
}
