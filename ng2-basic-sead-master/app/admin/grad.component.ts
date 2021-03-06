import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GradService} from './grad.service';
import {GradModel} from './grad.model';


@Component({
  moduleId: module.id,
  // styleUrls: [`../../public/css/styles.css`],
  // selector: 'monster-list',
  template: `
    <section *ngIf="grad" class="admin comp" >

      <div class="imgsCont">
        <img [src]="grad.getImgUrlBefore()" onError="this.src='public/img/grad/generalBefore.jpg'">
        <img [src]="grad.getImgUrlAfter()" onError="this.src='public/img/grad/generalAfter.png'">
      </div>

      <div class="det">
        <h2>Links : <a href="{{grad.email}}">email</a>
        <a href="{{grad.github}}">github</a>
        <a href="{{grad.linkedin}}">linkedin</a>
        <a href="{{grad.facebook}}">facebook</a>
        <a href="{{grad.gallery}}">gallery</a></h2>
        <h2>Name : {{grad.name}}</h2>
        <h2>Course : {{grad.course}}</h2>
        <h2>Details : {{grad.details}}</h2>
        <h2>Moto : {{grad.moto}}</h2>
      </div>
      
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
