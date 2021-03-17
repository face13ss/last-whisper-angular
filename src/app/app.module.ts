import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditsongComponent } from './song/editsong/editsong.component';
import { CreatePlaylistComponent } from './playlist/create-playlist/create-playlist.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
// import { NavbarComponent } from "./shared/navbar/NavbarComponent";
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ListsongComponent } from './song/listsong/listsong.component';

@NgModule({
  declarations: [
    AppComponent,
    EditsongComponent,
    CreatePlaylistComponent,
    FooterComponent,
    HeaderComponent,
    // NavbarComponent,
    SidebarComponent,
    ListsongComponent
    
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
