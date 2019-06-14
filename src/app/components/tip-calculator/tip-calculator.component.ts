import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  constructor() { }


  amount = 0;
  tipPercent = .20;

  updateAmount(amount: number) {

    this.amount = amount;
  }

  ngOnInit() {
  }

  setTipPercent(percent: number) {
    this.tipPercent = percent;
  }
}
