import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'services',
    template: `
        <section id="skills">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading">Our Special Powers</h2>
                        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                </div>
                <div class="text-center graphRow">
                    <div class="graphCont">

                        <div class="mainBtn">
                            <img src="../public/img/home/coding-logo.png" alt="">
                        </div>
                        <div class="logosCont">
                            <div class="skills" *ngFor="let skill of skills ; let i = index">
                                    <img [src]="'../public/img/home/logos/'+skill+'.png'" alt="">
                            </div>
                        </div>
                        
                    </div>
                   
                </div>
            </div>
        </section>
    `
})
export class ServicesComponent {

    private skills = ['html5', 'javascript', 'css3', 'angular', 'git', 'sass', 'jquery', 'nodejs'];

    constructor() { }

}
