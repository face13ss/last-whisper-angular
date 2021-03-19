import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/model/playlist';
import { Song } from 'src/app/model/song';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class  HomepageComponent implements OnInit {
  listPlaylistNew : Playlist[] = [];
  listSongMostView10 : Song[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
