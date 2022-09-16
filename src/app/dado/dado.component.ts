import { Component, OnInit, Input } from '@angular/core'; //we import the input class to define the @Input decorator

@Component({
  selector: 'app-dado', //property named 'selector' with value 'app-dado'
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  @Input() valor: number=1; //syntax to define a property that arrives as a parameter of the parent component

  constructor() { }

  ngOnInit(): void {
  }

}
