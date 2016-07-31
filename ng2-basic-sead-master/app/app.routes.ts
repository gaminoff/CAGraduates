import { PLATFORM_DIRECTIVES } from '@angular/core';
import {AppComponent} from './app.component';
// import {MonsterListComponent} from './monster/monster-list.component';
// import {MonsterComponent} from './monster/monster.component';
// import {MonsterEditComponent} from './monster/monster-edit.component';
import {HomeComponent} from './CAGrads/home.component';
import {AdminComponent} from './admin/admin.component';
import {GradListComponent} from './admin/grad-list.component';
import {GradComponent} from './admin/grad.component';
import {GradEditComponent} from './admin/grad-edit.component';
import {ChatRoomComponent} from './chat/chat-room.component';
import { RouterConfig, ROUTER_DIRECTIVES, provideRouter } from '@angular/router';

const routes: RouterConfig = [
  { path: '', component: AppComponent },
  // { path: 'monster', component: MonsterListComponent },
  // { path: 'monster/edit', component: MonsterEditComponent },
  // { path: 'monster/edit/:id', component: MonsterEditComponent },
  // { path: 'monster/:id/:name', component: MonsterComponent },
  { path: 'CAGrads', component: HomeComponent },
  { path: 'chat', component: ChatRoomComponent },
  // { path: 'admin', component: AdminComponent },
  { path: 'admin', component: GradListComponent },
  { path: 'admin/edit', component: GradEditComponent },
  { path: 'admin/edit/:id', component: GradEditComponent },
  { path: 'admin/:id/:name', component: GradComponent }


];

export const ROUTER_PROVIDERS = [
  provideRouter(routes),
  {provide: PLATFORM_DIRECTIVES, useValue: ROUTER_DIRECTIVES, multi: true}
];
