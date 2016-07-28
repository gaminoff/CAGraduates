import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { GradModel } from '../admin/grad.model';
import { SocialBtnsComponent } from './social-btns.component';


@Component({
    moduleId: module.id,
    selector: 'grad-modal',
    directives: [SocialBtnsComponent],
    template: `
        <div *ngIf="grad" class="gradDetails">
            <div class="detailsCont">

                <button class="exitModal" (click)="close.emit(true)" >X</button>
                <h2>{{grad.name}}</h2>  
                <p class="text-muted">Moto: "{{grad.moto}}"</p>
                <img class="img-responsive" 
                                src="public/img/home/team/{{grad.name}}-before.jpg" alt="">
                <p class="">{{grad.details}}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia tenetur aut in fugiat? Officia optio iure sapiente at molestiae doloribus maiores saepe odio asperiores, ut nesciunt similique quasi eligendi.
                </p>
                <em *ngIf="grad.email" class="text-muted">{{grad.email}}</em>
                <social-btns [grad]="grad"></social-btns>
            </div>
        </div>
    `
})
export class GradModalComponent implements OnInit {

    @Input() grad : GradModel ;
    @Output() close  = new EventEmitter() ;

    constructor(private el : ElementRef) {
     }

    ngOnInit() { 
      
    }

}