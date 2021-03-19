import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './component/admin/admin.component';
import { LoginHomeComponent } from './component/login-home/login-home.component';
import { RegisComponent } from './component/regis/regis.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    MusicPlayerComponent,
    AppComponent,
    AdminComponent,
    LoginHomeComponent,
    RegisComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
