import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ng-style',
  templateUrl: './diretiva-ng-style.component.html',
  styleUrls: ['./diretiva-ng-style.component.css']
})
export class DiretivaNgStyleComponent implements OnInit {

  constructor() { }

  myFontSize = "10px";
  myColor: "green";   

  ngOnInit(): void {
  }

}
