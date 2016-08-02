import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { GradModel } from '../admin/grad.model';
import { SocialBtnsComponent } from './social-btns.component';


@Component({
    moduleId: module.id,
    selector: 'grad-modal',
    directives: [SocialBtnsComponent],
    template: `
        <div *ngIf="grad" class="modalCont">
            <div [ngClass]="{opened: isOpen}" class="gradDetails">
                <div class="detailsCont">
                    <button class="exitModal" (click)="closeModal()" >X</button>
                    <h2>{{grad.name}}</h2>  
                    <em class="text-muted">"{{grad.moto}}"</em>
                    <img class="img-responsive" 
                                    [src]="grad.imgAfterUrl? grad.imgAfterUrl:'../public/img/grad/no-profile.jpg'" alt="">
                    <p class="">{{grad.details}}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere officia tenetur aut in fugiat? Officia optio iure sapiente at molestiae doloribus maiores saepe odio asperiores, ut nesciunt similique quasi eligendi.
                    </p>
                    <p>Cycle: {{grad.course}}</p>
                    <em *ngIf="grad.email" class="text-muted">{{grad.email}}</em>
                    <social-btns [grad]="grad"></social-btns>
                </div>
            </div>
        </div>
        
    `
})
export class GradModalComponent implements OnChanges {

    @Input() grad : GradModel ;
    @Output() close  = new EventEmitter() ;
    private isOpen : boolean = false ;

    constructor(private el : ElementRef) {
     }

    ngOnChanges(changes : SimpleChanges) {
        if (changes['grad'].currentValue) {
            this.isOpen = true ;
        }     
    }

    closeModal() {
        this.close.emit(true);
        this.isOpen = false ;
    }

    // ngAfterViewInit() {
    //         console.log('modal open', this.grad);   
    // }

}