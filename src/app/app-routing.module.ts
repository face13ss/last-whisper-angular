import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditsongComponent } from './song/editsong/editsong.component';
import { ListsongComponent } from './song/listsong/listsong.component';
import {CreatePlaylistComponent} from './playlist/create-playlist/create-playlist.component';
import { HomepageComponent } from './user/homepage/homepage.component';
// import {PlaylistComponentComponent} from './component/playlist-component/playlist-component.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },{
    path: 'editSong',
    component: EditsongComponent
  },
  {
    path: 'listSong',
    component: ListsongComponent
  },
  {
  path: 'createPlaylist',
    component: CreatePlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
