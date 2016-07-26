import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './header.component';
import { ServicesComponent } from './services.component';
import { PortfolioComponent } from './portfolio.component';
import { AboutComponent } from './about.component';
import { TeamComponent } from './team.component';
import { ClientsComponent } from './clients.component';
import { ContactComponent } from './contact.component';

@Component({
    moduleId: module.id,
    styleUrls: ['home.css'],
    encapsulation: ViewEncapsulation.None,
    // selector: 'selector',
    // template: `home`
    templateUrl: 'home.component.html',
    directives: [   HeaderComponent, 
                    ServicesComponent, 
                    PortfolioComponent,
                    AboutComponent,
                    TeamComponent,
                    ClientsComponent,
                    ContactComponent
                ]
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('yoo');

    // // jQuery for page scrolling feature - requires jQuery Easing plugin
    // $('a.page-scroll').bind('click', function(event) {
    //     var $anchor = $(this);
    //     $('html, body').stop().animate({
    //         scrollTop: ($($anchor.attr('href')).offset().top - 50)
    //     }, 1250, 'easeInOutExpo');
    //     event.preventDefault();
    // });

    // // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });

    // // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    //     $('.navbar-toggle:visible').click();
    // });

    // // Offset for Main Navigation
    // $('#mainNav').affix({
    //     offset: {
    //         top: 100
    //     }
    // })

        
     }

}