import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {
  color: string = "accent";  
  btnDisabled = true;
  colors = [ 'primary', 'accent', 'warn', '' ]
  indice = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      this.indice = (this.indice+1) % this.colors.length;
    },1000);
  }

}
