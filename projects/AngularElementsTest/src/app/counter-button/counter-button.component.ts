import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss']
})
export class CounterButtonComponent implements OnInit {

  @Input() counterValue: number = 0
  @Input() counterIncrementAmount: number = 1
  @Output() counterValueChange = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onCounterButtonClicked() {
    if (typeof this.counterValue === 'string') {
      this.counterValue = parseInt(this.counterValue)
    }
    if (typeof this.counterIncrementAmount === 'string') {
      this.counterIncrementAmount = parseInt(this.counterIncrementAmount)
    }
    this.counterValueChange.emit(this.counterValue += this.counterIncrementAmount);
  }

}
