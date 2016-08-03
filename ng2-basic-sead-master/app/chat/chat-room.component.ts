import {Component} from '@angular/core';
import {ChatRoomService} from './chat-room.service'
@Component({
    selector: 'chat-room',
    styles:[`
    *{font-family: Monaco, Consolas;}
    `],
    template: `
    <div class="chat">
      <div>
        <h2>{{"nickName"}}</h2>      
        <input #j (keyup.enter)="nick=j.value; j.value=''" class="chatInput chatNick">
        <h2>{{(chatRoom.connected$ | async) ? "Connected!" : "Disconnected..."}}</h2>
        <div *ngIf="nick!==undefind">
          <input #i (keyup.enter)="chatRoom.send$.next(nick +':' +i.value); i.value = ''" class="chatInput chatMessage">
        </div>
        <div *ngFor="let message of chatRoom.messages$ | async" >
        {{message}}
        </div>
      </div>
    </div>
    `
})
export class ChatRoomComponent {
  private nick:string;
    constructor(private chatRoom : ChatRoomService) {
      
    }
}