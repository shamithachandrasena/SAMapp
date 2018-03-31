import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendComponent } from './friend-list/friend/friend.component';
import { NameComponent } from './name/name.component';
import { LocationComponent } from './location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FriendListComponent,
    FriendComponent,
    NameComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
