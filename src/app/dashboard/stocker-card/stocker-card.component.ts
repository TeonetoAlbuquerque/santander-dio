import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/model/stocke-model';

@Component({
  selector: 'app-stocker-card',
  templateUrl: './stocker-card.component.html',
  styleUrls: ['./stocker-card.component.css']
})
export class StockerCardComponent implements OnInit {

  @Input()
  stock = new Stock();
  
  constructor() { }

  ngOnInit(): void {
  }

}
