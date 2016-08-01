import { Component, OnInit } from '@angular/core';
import {GradModel} from './grad.model';

@Component({
  moduleId: module.id,
  selector: 'grad-thumb',
  styleUrls: [`../../public/css/styles.css`],
  inputs: ['grad'],
  template: `
          <section class="admin thumb">
            <p>{{grad.name}}</p>
            <a routerLink="/admin/{{grad.id}}/{{grad.name}}">
              <img class="imgGrad" [src]="grad.getImgUrlAfter()" onError="this.src='public/img/grad/generalAfter.png'" />
            </a>
            <h6>Course: {{grad.course}}</h6>

          </section>
          `
// (error)="grad.getImgUrlErr()"
})
export class GradThumbComponent implements OnInit {

  private grad : GradModel;

  constructor() { }

  ngOnInit() { }

}
