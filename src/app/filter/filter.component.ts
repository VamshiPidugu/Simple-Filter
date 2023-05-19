// import { Component } from '@angular/core';

// @Component({
//   selector: 'fiter-data',
//   template: `
//     <select multiple (change)="onChange($event)">
//       <option *ngFor="let item of options" [value]="item.id">{{ item.name }}</option>
//     </select>
//     <br><br>
//     Selected items:
//     <ul>
//       <li *ngFor="let selectedItem of selectedItems">{{ selectedItem.name }}</li>
//     </ul>
//     {{selectedItems | json}}
//   `,
// })
// export class FilterComponent {
//   options = [
//     { id: 1, name: 'Option 1' },
//     { id: 2, name: 'Option 2' },
//     { id: 3, name: 'Option 3' },
//     { id: 4, name: 'Option 4' },
//     { id: 5, name: 'Option 5' },
//   ];
//   selectedItems = [];

//   onChange(event) {
//     const selectedOptions = event.target.options;
//     this.selectedItems = [];
//     for (let i = 0; i < selectedOptions.length; i++) {
//       if (selectedOptions[i].selected) {
//         const selectedId = +selectedOptions[i].value;
//         const selectedItem = this.options.find((x) => x.id === selectedId);
//         this.selectedItems.push(selectedItem);
//       }
//     }
//   }
// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'fiter-data',
//   template: `
//   <select>
//   <option >
//   <input type="checkbox">A
//   </option> <option >
//   <input type="checkbox">B
//   </option> <option >
//   <input type="checkbox">C
//   </option>
//   </select>
//     <div *ngFor="let item of options">

//       <input type="checkbox" [value]="item.id" (change)="onChange($event, item)"> {{ item.name }}

//     </div>

//     <br><br>
//     Selected items:
//     <ul>
//       <li *ngFor="let selectedItem of selectedItems">{{ selectedItem.name }}</li>
//     </ul>

//   `,
// })
// export class FilterComponent {
//   options = [
//     { id: 1, name: 'Option 1' },
//     { id: 2, name: 'Option 2' },
//     { id: 3, name: 'Option 3' },
//     { id: 4, name: 'Option 4' },
//     { id: 5, name: 'Option 5' },
//   ];
//   selectedItems = [];

//   onChange(event, item) {
//     if (event.target.checked) {
//       this.selectedItems.push(item);
//     } else {
//       this.selectedItems = this.selectedItems.filter((x) => x.id !== item.id);
//     }
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'fiter-data',
  template: `
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Select Options
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div *ngFor="let item of options">
          <input type="checkbox" [value]="item.id" (change)="onChange($event, item)"> {{ item.name }}
        </div>
      </div>
    </div>
    <br><br>
    Selected items:
    <ul>
      <li *ngFor="let selectedItem of selectedItems">{{ selectedItem.name }}</li>
    </ul>
  `,
})
export class FilterComponent {
  options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
    { id: 3, name: 'Option 3' },
    { id: 4, name: 'Option 4' },
    { id: 5, name: 'Option 5' },
  ];
  selectedItems = [];

  onChange(event, item) {
    if (event.target.checked) {
      this.selectedItems.push(item);
    } else {
      this.selectedItems = this.selectedItems.filter((x) => x.id !== item.id);
    }
  }
}
