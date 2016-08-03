import {Component} from '@angular/core';
import {ChatRoomService} from './chat-room.service'
@Component({
    selector: 'chat-room',
    styles:[`
    *{font-family: Monaco, Consolas;}
    `],
    template: `
      <h2>{{"nickName"}}</h2>      
      <input #j (keyup.enter)="nick=j.value; j.value=''">
      <h2>{{(chatRoom.connected$ | async) ? "Connected!" : "Disconnected..."}}</h2>
      <input #i (keyup.enter)="chatRoom.send$.next(nick +':' +i.value); i.value = ''">
      <div *ngFor="let message of chatRoom.messages$ | async">
       {{message}}
      </div>
    `
})
export class ChatRoomComponent {
  private nick:string;
    constructor(private chatRoom : ChatRoomService) {
      
    }
}