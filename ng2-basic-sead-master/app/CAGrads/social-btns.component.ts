import { Component, OnInit } from '@angular/core';
import { GradModel } from '../admin/grad.model';

@Component({
    moduleId: module.id,
    selector: 'social-btns',
    inputs: ['grad'],
    template: `
        <ul *ngIf="grad" class="list-inline social-buttons">
            <li *ngIf="grad.github"><a href="{{grad.gitHub}}"><i class="fa fa-github"></i></a>
            </li>
            <li *ngIf="grad.facebook"><a href="{{grad.facebook}}"><i class="fa fa-facebook"></i></a>
            </li>
            <li *ngIf="grad.linkedin"><a href="{{grad.linkedin}}"><i class="fa fa-linkedin"></i></a>
            </li>
            <li *ngIf="grad.gallery"><a href="{{grad.gallery}}"><i class="fa fa-th"></i></a>
            </li>
        </ul>


    `
})
export class SocialBtnsComponent implements OnInit {

    private grad : GradModel ; 

    constructor() { }

    ngOnInit() { }

}