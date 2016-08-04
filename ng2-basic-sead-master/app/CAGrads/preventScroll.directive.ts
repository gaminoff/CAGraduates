// import {Directive, ElementRef, Renderer} from '@angular/core';

// @Directive({
//     selector: '[scroller]',
// })
// export class ScrollerDirective {
//     constructor(private elRef: ElementRef, private renderer: Renderer) {
//     public lastScrollTop = -1;
//         renderer.listen(elRef.nativeElement, 'wheel', (e) => {
//             console.log('event', e);
//             console.log('scrollTop', elRef.nativeElement.scrollTop);
//             console.log('lastScrollTop', this.lastScrollTop);
            
//             if (elRef.nativeElement.scrollTop +  elRef.nativeElement.offsetHeight >  elRef.nativeElement.scrollHeight) {
//               if (e.deltaY > 0) {
//               e = e || window.event;
//               if (e.preventDefault)
//                   e.preventDefault();
//               e.returnValue = false; 
//               }
//             }
//         }, false)
        
//     }

// }

import {Directive} from "@angular/core";

@Directive({
    selector: '[scroller]',
    host: {'(window:scroll)': 'track($event)'}
})

export class ScrollerDirective {
    track($event: Event) {
        console.log("Scroll Event", $event);
        $event.preventDefault();
    }
}