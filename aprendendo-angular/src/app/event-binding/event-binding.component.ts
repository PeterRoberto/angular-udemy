import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  buttonName = "My button";
  i = 0;
  constructor() { }
  spinnerMode = "determinate" 
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;
  inputName = "Jhon";
  ngOnInit(): void {
  }

  save() {
    console.log("click"); 
  }

  inc() {
    this.i++;
    this.buttonName = "It was clicked " + this.i + " times";
  }

  disable() {  
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true; 
      this.spinnerMode = "determinate";
    }, 3000 );
  }

  cbChange(event) {
    this.selectDisabled = event.checked; 
  }

  selectionChange(event) {
    console.log(event);
    this.selectedOption = event.value;
  }

  // inputEvent(event) {
  //   console.log(event.target.value); 
  // }
}
