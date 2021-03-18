import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistComponentComponent} from './component/playlist-component/playlist-component.component';

const routes: Routes = [
  {
    path: 'playlists',
    component: PlaylistComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
