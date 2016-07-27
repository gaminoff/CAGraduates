import { Component, OnInit } from '@angular/core';
import { SocialBtnsComponent } from './social-btns.component';
import {GradService} from '../admin/grad.service';
import {GradModel} from '../admin/grad.model';


@Component({
    moduleId: module.id,
    selector: 'team',
    directives: [SocialBtnsComponent],
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
                            <img src="public/img/home/team/{{grad.name}}-before.jpg" class="img-responsive img-circle" alt="">
                            <h4>{{grad.name}}</h4>
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
    `
})
export class TeamComponent implements OnInit {

    private grads : GradModel[] ;

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



}