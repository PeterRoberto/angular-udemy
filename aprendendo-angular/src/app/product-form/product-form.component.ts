import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../models/department.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  [x: string]: any;

  name: string;
  department: Department; 
  price: number;  
  description: string;
  departments: Department[];
   
  constructor(
    private productService: ProductService,
    private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departments = this.departmentService.getDepartments();
  }

   
  save() {
    this.productService.addProduct({
      name: this.name,
      price: this.price,
      description: this.description,
      department: this.department
    });
    this.clear();
  } 

  clear() {
    this.name = "";
    this.price = 0;
    this.description = "";
    this.department = null;
  } 

}
