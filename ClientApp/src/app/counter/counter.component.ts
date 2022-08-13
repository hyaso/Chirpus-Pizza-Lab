import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public readonly theMenuItems: MenuItem[] = [
    { itemName: 'Chicken Fingers', Category: 'dinner', Price: 11.99 },
    { itemName: 'Pizza', Category: 'dinner', Price: 11.99 },
    { itemName: 'Wings', Category: 'side', Price: 8.99 },
    { itemName: 'Breadsticks', Category: 'side', Price: 5.99 },
    { itemName: 'Caesar Salad', Category: 'salad', Price: 4.99 },
    { itemName: 'Cinnamon Roll', Category: 'dessert', Price: 8.99 }
  ]
}

export class MenuItem {
  public itemName: string = "";
  public Category: string = "";
  public Price: number = 0;
}
