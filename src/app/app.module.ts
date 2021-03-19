import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { environment } from '../environments/environment';
// import { AngularFireModule } from '@angular/fire/firebase.app.module';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/storage";
import { UploadFileComponent } from './upload-file/upload-file.component';
import { EditsongComponent } from './song/editsong/editsong.component';
// import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
// import { NavbarComponent } from "./shared/navbar/NavbarComponent";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListsongComponent } from './song/listsong/listsong.component';
// import { PlaylistComponentComponent } from './component/playlist-component/playlist-component.component';
// import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { from } from 'rxjs';
import { HomepageComponent } from './user/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    UploadFileComponent,
    EditsongComponent,
    CreatePlaylistComponent,
    // HttpClientModule,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ListsongComponent,
    CreatePlaylistComponent,
    HomepageComponent
    // PlaylistComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireStorageModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig, 'cloud'),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
