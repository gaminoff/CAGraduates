import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import {GradService} from './admin/grad.service';
import {ChatRoomService} from './chat/chat-room.service';

import * as io from 'socket.io-client';


@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [GradService, ChatRoomService, ToastsManager, {provide: 'io', useValue: io}]

})
export class AppComponent implements OnInit {

  private inAdminPage = false ;


  constructor(private router: Router) {
    router.events.filter(event => event instanceof NavigationStart)
        .subscribe( event => {
            // console.log('event: ', event.url);
            if ((event.url).includes('/admin')) this.inAdminPage = true ;
            else if (event.url === '/') this.router.navigate(['/CAGrads']);
            else this.inAdminPage = false ;
        })
  }

} 