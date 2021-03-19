import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from '@angular/fire/storage';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { EditsongComponent } from './song/editsong/editsong.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListsongComponent } from './song/listsong/listsong.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { HomepageComponent } from './user/homepage/homepage.component';
import {NgxAudioPlayerModule} from "ngx-audio-player";

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    EditsongComponent,
    CreatePlaylistComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ListsongComponent,
    CreatePlaylistComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
