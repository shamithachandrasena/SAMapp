import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FriendListComponent } from './friend-list/friend-list.component';
import { FriendComponent } from './friend-list/friend/friend.component';
import { NameComponent } from './name/name.component';
import { LocationComponent } from './location/location.component';
import { WelcomeNoteComponent } from './welcome-note/welcome-note.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FriendListComponent,
    FriendComponent,
    NameComponent,
    LocationComponent,
    WelcomeNoteComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbeKaQy7V6NoB3iUmlX6GSWgbtA0IFqZ4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
