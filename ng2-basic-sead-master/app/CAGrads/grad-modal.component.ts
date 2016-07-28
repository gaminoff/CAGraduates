import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { GradModel } from '../admin/grad.model'


@Component({
    moduleId: module.id,
    selector: 'grad-modal',
    // inputs: ['grad'],
    template: `
        <div *ngIf="grad" class="gradDetails">
            <div class="detailsCont">

                <button (click)="closeModal()" >X</button>
                <h2>{{grad.name}}</h2>   
            </div>
        </div>
    `
})
export class GradModalComponent implements OnInit {

    @Input() grad : GradModel ;
    

    constructor(private el : ElementRef) {
        console.log(el);
        // el.nativeElement.style.display = 'block';
        
     }

    ngOnInit() { 
            
    }

    ngOnChanges() {
        // console.log('changes', this.grad);

        // let elModal =  <HTMLElement>document.querySelector('.gradDetails') ; 
        // console.log('elmodal', elModal);
        
    }

    closeModal() {
        this.grad = null ;
        console.log('grad from modal: ', this.grad);
        // let elModal =  <HTMLElement>document.querySelector('.gradDetails') ; 
        // elModal.style.display = 'none';
    }

}