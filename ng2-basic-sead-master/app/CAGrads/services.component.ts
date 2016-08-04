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
export class ServicesComponent implements OnInit {

    private skills = ['html5', 'javascript', 'css3', 'angular', 'git', 'sass', 'jquery', 'nodejs'];

    constructor() { }

    ngOnInit() { 

    }

}




                    // <!--<div class="col-md-4">
                    //     <span class="fa-stack fa-4x">
                    //         <i class="fa fa-circle fa-stack-2x text-primary"></i>
                    //         <i class="fa fa-lock fa-stack-1x fa-inverse"></i>
                    //     </span>
                    //     <h4 class="service-heading">Web Security</h4>
                    //     <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    // </div>-->