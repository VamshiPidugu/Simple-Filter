import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  items = [
    { name: 'item 1', selected: false },
    { name: 'item 2', selected: false },
    { name: 'item 3', selected: false },
    { name: 'item 3', selected: false },
    { name: 'item 3', selected: true },
  ];

  data = [
    { id: 1, name: 'Option 1', category: 'A' },
    { id: 2, name: 'Option 2', category: 'B' },
    { id: 3, name: 'Option 3', category: 'A' },
    { id: 4, name: 'Option 4', category: 'C' }
  ];

  filteredItems = [];
  constructor() {
    this.items.map((d) => {
      if (d.selected) this.filteredItems.push(d);
    });
  }

  filter() {
    this.filteredItems = this.items.filter((item) => item.selected);
  }
}
