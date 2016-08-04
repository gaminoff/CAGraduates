import {Component} from '@angular/core';
import {ChatRoomService} from './chat-room.service'
@Component({
    selector: 'chat-room',
    styles:[`
    *{font-family: Monaco, Consolas;}
    `],
    template: `
    <body class="chatRoom">
        
        <div><img src="img/coding-logo.png"></div>
              <div class="chat">

         
                  <div class="total">
                    <button (click)="nick=undefind ; j.focus()">Disconnect</button>
                    <h2>{{(nick) ? "Well come "+ nick : "nickName"}}</h2>      
                    <input #j (keyup.enter)="nick=j.value; j.value=''" class="chatInput chatNick" autofocus>
                    
                    <div *ngIf="(nick!==undefind && nick!=='')">
                      <h2>{{(chatRoom.connected$ | async) ? "Connected!" : "Disconnected..."}}</h2>
                      
                      <textarea #i  (keyup.enter)="chatRoom.send$.next(nick +':' +i.value); i.value = ''" class="chatInput chatMessage" placeholder=" Type your message">
                      </textarea>
                    </div>
                    <div  *ngFor="let message of chatRoom.messages$ | async" class="message"  >
                    {{message}}
                    </div>
                  </div>
                </div>
          <div><img src="img/coding-logo.png"></div>
      </body>
    `
})
export class ChatRoomComponent {
  private nick:string;
  private mess:string;
  // private mess:string;
    constructor(private chatRoom : ChatRoomService) {
      
    }
}