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
      <img [src]="grad.getImgUrlAfter()" onError="this.src='public/img/grad/general.png'">
      <img [src]="grad.getImgUrlBefore()" onError="this.src='public/img/grad/general.png'">
      <h2>Grad-{{grad.name}}</h2>
      <h2><a href="{{grad.email}}">email</a></h2>
      <h2><a href="{{grad.gitHub}}">gitHub</a></h2>
      <h2><a href="{{grad.linked}}">linked</a></h2>
      <h2><a href="{{grad.facebook}}">facebook</a></h2>
      <h2><a href="{{grad.galery}}">galery</a></h2>
      <h2>details-{{grad.details}}</h2>
      <h2>moto-{{grad.moto}}</h2>
      
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
