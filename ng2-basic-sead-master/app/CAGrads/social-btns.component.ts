import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'social-btns',
    template: `
        <ul class="list-inline social-buttons">
            <li><a href="#"><i class="fa fa-twitter"></i></a>
            </li>
            <li><a href="#"><i class="fa fa-facebook"></i></a>
            </li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a>
            </li>
        </ul>
    `
})
export class SocialBtnsComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}