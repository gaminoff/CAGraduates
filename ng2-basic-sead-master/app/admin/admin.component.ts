import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    // selector: 'selector',
    template: `hi`
})
export class AdminComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('yo');
     }

}