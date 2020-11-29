import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-from',
  templateUrl: './department-from.component.html',
  styleUrls: ['./department-from.component.css']
})
export class DepartmentFromComponent implements OnInit {
  [x: string]: any;

  depName: string;


  constructor(
    private departmentService: DepartmentService) { }

  ngOnInit(): void {
  }


  save() { 
    this.departmentService.addDepartment({
      name: this.depName 
    });
    this.clear();
  } 

  clear() { 
    this.depName = "";
  } 

}
