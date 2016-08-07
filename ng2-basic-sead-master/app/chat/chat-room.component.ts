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
                    <button (click)="disc=nick+' '+'is'+' '+'disconnect';nick=undefined ;j.hidden=false; j.focus()">Disconnect</button>
                    <h2>{{(nick) ? "Well come "+ nick : "nickName"}}</h2>      
                    <input #j (keyup.enter)="nick=j.value; j.value='' ; focusTo(i);j.hidden=true" class="chatInput chatNick" autofocus>
                    {{disc}}
                    <div [hidden]="!nick">
                      <h2>{{(chatRoom.connected$ | async) ? "Connected!" : "Disconnected..."}}</h2>
                      
                      <textarea #i  (keyup.enter)="chatRoom.send$.next(nick +':' +i.value);
                         i.value = ''" class="chatInput chatMessage" placeholder=" Type your message">
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
  private disc:string;
  // private mess:string;
    constructor(private chatRoom : ChatRoomService) {
      
    }
    focusTo(el) {
      setTimeout(()=>{
        el.focus();

      }, 0);
    }
}