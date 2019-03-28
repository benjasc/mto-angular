import { Component, OnInit } from '@angular/core';
import {InputPipe} from '../../../../../pipe/inputs.pipe'

@Component({
  selector: 'app-ingreso-reservas-corporativas',
  templateUrl: './ingreso-reservas-corporativas.component.html',
  styleUrls: ['./ingreso-reservas-corporativas.component.scss']
})
export class IngresoReservasCorporativasComponent implements OnInit {


  constructor(private inputPipe : InputPipe) { 
    
  }

  ngOnInit() {
  }


}


  