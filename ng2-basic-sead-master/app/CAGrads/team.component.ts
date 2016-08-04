import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { SocialBtnsComponent } from './social-btns.component';
import {GradService} from '../admin/grad.service';
import {GradModel} from '../admin/grad.model';
import {GradModalComponent} from './grad-modal.component';
import { ScrollerDirective } from './preventScroll.directive';


@Component({
    moduleId: module.id,
    selector: 'team',
    directives: [SocialBtnsComponent, GradModalComponent, ScrollerDirective],
    // templateUrl: 'team.component.html'
    template: `
        <section id="team" class="bg-light-gray">
            <div class="container">

                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">Meet Our Graduates</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>

                <div class="row gradsCont">
                    <div *ngFor="let grad of grads">
                        <div *ngIf="grad.name" class="team-member">

                            <div class="flipSpace" (click)="openGradModal(grad)">
                                <div class="imgsCont">
                                    <div class="imgAfter img">
                                        <img class="img-responsive img-circle" [src]="grad.imgAfterUrl? grad.imgAfterUrl:'../public/img/grad/no-profile.jpg'" alt="">                                
                                    </div>
                                    <div class="imgBefore img">
                                        <img class="img-responsive img-circle" [src]="grad.imgBeforeUrl? grad.imgBeforeUrl:'../public/img/grad/no-profile.jpg'" alt="">
                                    </div>
                                </div>
                            </div>

                            <h4>{{grad.name}}</h4>
                            <p class="text-muted">{{grad.moto}}</p>
                        </div>
                    </div>     
                </div>
            </div>
        </section>

        <grad-modal [grad]="selectedGrad" (close)="selectedGrad = null"></grad-modal>
    `
})
export class TeamComponent implements OnInit { //, AfterViewChecked {

    private grads : GradModel[] ;
    private selectedGrad : GradModel ;
    // private  gradClicked = false ;
    // @ViewChild(GradModalComponent) gradModal : GradModalComponent ;
    constructor(private gradService : GradService) { }

    ngOnInit() {
        const prmGrads = this.gradService.query();

        prmGrads.then((grads : GradModel[]) => {
            this.grads = grads;
            console.log('this.grads: ', this.grads);
        });

        prmGrads.catch(err => {
            alert('Sorry,cannot load the grads, try again later');
            console.log('Cought an error in GradList', err);
        });

    }

    openGradModal(grad) {
        // this.gradClicked = true ;
        this.selectedGrad = grad ;
        console.log('modal!', this.selectedGrad);

    }



}