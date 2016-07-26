import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GradService} from './grad.service';
import {GradModel} from './grad.model';


@Component({
  moduleId: module.id,
  styleUrls: [`grad.css`],
  // selector: 'monster-list',
  template: `
    <section *ngIf="grad">
      <img [src]="grad.getImgUrl()" >
      <h2>Grad {{grad.name}}</h2>

    </section>
  `
})
export class GradComponent implements OnInit {

  private grad : GradModel;

  constructor(
                private route: ActivatedRoute,
                private gradService : GradService
  ) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
    //  console.log('Params are: ', params);
     const id = params['id'];
     const prmGrad = this.gradService.get(id);
     prmGrad.then((grad: GradModel) => {
       this.grad = grad;
     });
   });
  }



}
