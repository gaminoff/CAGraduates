import { Component, OnInit, ViewChildren } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {GradService} from './grad.service';
import {GradModel} from './grad.model';
import {FilterByPipe} from '../shared/pipes/filter-list.pipe';
import {GradFilterComponent} from './grad-filter.component';
import {GradThumbComponent} from './grad-thumb.component';


@Component({
  moduleId: module.id,
  styleUrls: [`grad.css`],
  pipes: [FilterByPipe],
  directives: [GradFilterComponent, GradThumbComponent],
  // selector: 'monster-list',
  template: `
    <section>
      <h2>Grads </h2>

      <grad-filter (filterChange)="filter = $event"></grad-filter>

      <a routerLink="/admin/edit" class="btn btn-primary">+ Add Grad</a>
      <ul>
        <li *ngFor="let grad of grads | filterBy:filter">
            <grad-thumb [grad]="grad"></grad-thumb>
            <div class="text-center">
              <button class="btn btn-danger" (click)="removeGrad(grad.id)">Delete</button>
              <a routerLink="/admin/edit/{{grad.id}}" class="btn btn-success">Edit</a>
            </div>
        </li>
      </ul>
    </section>


  `
})
export class GradListComponent implements OnInit {
  // TODO: let the pipe setup the initial filter
  private filter = {byName: '', byCourse: ''};
  private grads : GradModel[] = [];

  constructor(private toastr : ToastsManager, private gradService : GradService) { }

  ngOnInit() {
    const prmGrads = this.gradService.query();

    prmGrads.then((grads : GradModel[]) => {
      this.grads = grads;
      console.log('this.grads: ', this.grads)
    });

    prmGrads.catch(err => {
      alert('Sorry,cannot load the grads, try again later');
      console.log('Cought an error in GradList', err);
    });
  }
  removeGrad(gradId : string) {
    this.gradService.remove(gradId)
      .then((grads : GradModel[])=>{
        this.grads = grads;
        this.toastr.success('You are awesome!', 'Success!');
      });
  }
}
