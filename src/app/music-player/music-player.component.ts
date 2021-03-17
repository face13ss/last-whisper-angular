import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  msaapPlaylist: Track[] = [
    {
        title: 'In Love',
        link: 'https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0',
        artist: 'Artist',
        duration: 30
    },
    {
        title: 'Audio Two Title',
        link: 'Link to Audio Two URL',
        artist: 'Artist',
        duration: 30
    },
    {
        title: 'Audio Three Title',
        link: 'Link to Audio Three URL',
        artist: 'Artist',
        duration: 30
    },
];

  constructor() { }

  ngOnInit(): void {
  }

  onEnded(value:any){

  }

}
