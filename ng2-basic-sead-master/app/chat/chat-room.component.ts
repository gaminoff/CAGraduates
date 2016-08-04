import {Component} from '@angular/core';
import {ChatRoomService} from './chat-room.service'
@Component({
    selector: 'chat-room',
    styles:[`
    *{font-family: Monaco, Consolas;}
    `],
    template: `
    <div class="chat">
      <div class="total">
        <h2>{{"nickName"}}</h2>      
        <input #j (keyup.enter)="nick=j.value; j.value=''" class="chatInput chatNick">
        <div *ngIf="nick!==undefind">
          <h2>{{(chatRoom.connected$ | async) ? "Connected!" : "Disconnected..."}}</h2>
          
          <textarea #i  (keyup.enter)="chatRoom.send$.next(nick +':' +i.value); i.value = ''" class="chatInput chatMessage">
          </textarea>
        </div>
        <div  *ngFor="let message of chatRoom.messages$ | async" class="message"  >
        {{message}}
        </div>
      </div>
    </div>
    `
})
export class ChatRoomComponent {
  private nick:string;
  // private mess:string;
    constructor(private chatRoom : ChatRoomService) {
      
    }
}