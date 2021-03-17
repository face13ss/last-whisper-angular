import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditsongComponent } from './song/editsong/editsong.component';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    EditsongComponent,
    CreatePlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
