import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'header',
    template: `
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">Welcome To </div>
                <div class="intro-heading">Coding academy graduates</div>
                <a href="#services" class="page-scroll btn btn-xl">Tell Me More</a>
            </div>
        </div>
    `
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}