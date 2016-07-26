import { Component, OnInit } from '@angular/core';
import {GradModel} from './grad.model';

@Component({
  moduleId: module.id,
  selector: 'grad-thumb',
  styleUrls: [`grad.css`],
  inputs: ['grad'],
  template: `
          <section>
            <p>{{grad.name}}</p>
            <a routerLink="/admin/{{grad.id}}/{{grad.name}}">
              <img class="imgGrad" [src]="grad.getImgUrl()" />
            </a>
            <h6>Course: {{grad.course}}</h6>

          </section>
          `

})
export class GradThumbComponent implements OnInit {

  private grad : GradModel;

  constructor() { }

  ngOnInit() { }

}
