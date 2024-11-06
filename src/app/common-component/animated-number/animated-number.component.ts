import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-number',
  templateUrl: './animated-number.component.html',
  styleUrls: ['./animated-number.component.scss'],
})
export class AnimatedNumberComponent implements OnInit {
  @Input() startValue: number = 0;
  @Input() endValue: number = 1000;
  @Input() duration: number = 2000; // duration in ms
  displayValue: number = this.startValue;
  private intervalId: any;

  ngOnInit(): void {
    this.animateValue();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  animateValue() {
    const start = this.startValue;
    const end = this.endValue;
    const range = end - start;
    const steps = this.duration / 16; // number of steps for 16ms intervals
    const increment = range / steps;
    let current = start;

    this.intervalId = setInterval(() => {
      current += increment;
      if (
        (increment > 0 && current >= end) ||
        (increment < 0 && current <= end)
      ) {
        this.displayValue = end;
        clearInterval(this.intervalId);
      } else {
        this.displayValue = Math.floor(current);
      }
    }, 16); // update every 16ms for smooth animation
  }
}
