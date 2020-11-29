import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {

  users = [
    { login: "pitt", role: "admin", lastlogin: new Date('02/04/2018') },
    { login: "raul", role: "user", lastlogin: new Date('04/30/2018') },
    { login: "xandrin", role: "admin", lastlogin: new Date('05/23/2018') },
    { login: "julys", role: "admin", lastlogin: new Date('01/8/2018') },
    { login: "vini", role: "user", lastlogin: new Date('02/20/2018') },
  ]
 


  constructor() { }

  ngOnInit(): void {    
  }

  save() {  
    console.log(this.users);
  };

}
