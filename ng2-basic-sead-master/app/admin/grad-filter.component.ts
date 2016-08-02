import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'grad-filter',
  outputs: ['filterChange'],
  //  styleUrls: [`../../public/css/styles.css`],
  // styles: [`section {background-color: #DDD; margin: 2em 0; padding:0.4em 1em 1em; border-radius:0.4em} `],
  template: `
      <section class="admin filter">
        <h3>Filter</h3>
        By Name: <input type="text" [(ngModel)]="filter.byName" (input)="filterChanged()" />
        By Course: <input type="text" [(ngModel)]="filter.byCourse" (input)="filterChanged()"/>
      </section>

  `
})
export class GradFilterComponent implements OnInit {

  private filterChange = new EventEmitter();

  private filter = {byName: '', byCourse: ''};
  constructor() { }

  ngOnInit() { }
  filterChanged() {
    console.log('filter: ', this.filter);
    this.filterChange.emit(this.filter);
  }

}
