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
      <img [src]="grad.getImgUrlAfter()" >
      <img [src]="grad.getImgUrlBefore()" >
      <h2>Grad {{grad.name}}</h2>
      <h2>email{{grad.email}}</h2>
      <h2>gitHub{{grad.gitHub}}</h2>
      <h2>linked{{grad.linked}}</h2>
      <h2>facebook{{grad.facebook}}</h2>
      <h2>galery{{grad.galery}}</h2>
      <h2>details{{grad.details}}</h2>
      <h2>moto{{grad.moto}}</h2>
      
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
