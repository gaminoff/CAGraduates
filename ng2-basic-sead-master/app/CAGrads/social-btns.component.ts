import { Component, OnInit } from '@angular/core';
import { GradModel } from '../admin/grad.model';

@Component({
    moduleId: module.id,
    selector: 'social-btns',
    inputs: ['grad'],
    template: `
        <ul *ngIf="grad" class="list-inline social-buttons">
            <li *ngIf="grad.github"><a title="Visit My Github" href="{{grad.github}}"><i class="fa fa-github"></i></a>
            </li>
            <li *ngIf="grad.facebook"><a title="Visit My Facebook Page" href="{{grad.facebook}}"><i class="fa fa-facebook"></i></a>
            </li>
            <li *ngIf="grad.linkedin"><a title="Visit My LinkedIn Page" href="{{grad.linkedin}}"><i class="fa fa-linkedin"></i></a>
            </li>
            <li *ngIf="grad.gallery"><a title="Visit My Gallery" href="{{grad.gallery}}"><i class="fa fa-th"></i></a>
            </li>
        </ul>


    `
})
export class SocialBtnsComponent implements OnInit {

    private grad : GradModel ; 

    constructor() { }

    ngOnInit() { }

}