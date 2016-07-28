import { Component, OnInit } from '@angular/core';
import { SocialBtnsComponent } from './social-btns.component';
import {GradService} from '../admin/grad.service';
import {GradModel} from '../admin/grad.model';
import {GradModalComponent} from './grad-modal.component';


@Component({
    moduleId: module.id,
    selector: 'team',
    directives: [SocialBtnsComponent, GradModalComponent],
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

                <div class="row">
                    <div class="col-sm-4" *ngFor="let grad of grads">
                        <div class="team-member">
                        
                            <img class="img-responsive img-circle" (click)="openGradModal(grad)" 
                                src="public/img/home/team/{{grad.name}}-before.jpg" alt="">
                            <h4>{{grad.name}}</h4>
                            <p class="text-muted">My moto{{grad.moto}}</p>
                            <!--<social-btns></social-btns>-->
                        </div>
                    </div>     
                </div>

                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2 text-center">
                        <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                    </div>
                </div>

            </div>
        </section>

        <grad-modal [grad]="selectedGrad"></grad-modal>
    `
})
export class TeamComponent implements OnInit {

    private grads : GradModel[] ;
    private selectedGrad : GradModel ;

    constructor(private gradService : GradService) { }

    ngOnInit() {
        const prmGrads = this.gradService.query();

        prmGrads.then((grads : GradModel[]) => {
            this.grads = grads;
            console.log('this.grads: ', this.grads)
        });

        prmGrads.catch(err => {
            alert('Sorry,cannot load the grads, try again later');
            console.log('Cought an error in GradList', err);
        });

    }

    openGradModal(grad) {
        this.selectedGrad = grad ;
        console.log('modal!', this.selectedGrad);

    }



}