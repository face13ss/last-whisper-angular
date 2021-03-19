import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsongComponent } from './song/editsong/editsong.component';
// import {PlaylistComponentComponent} from './component/playlist-component/playlist-component.component';

const routes: Routes = [
  {
    path: 'playlists',
    component: EditsongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
