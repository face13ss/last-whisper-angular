import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PlaylistServiceService} from '../../service/playlist/playlist-service.service';
import {Playlist} from '../../model/playlist';
import {MatPaginator, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-playlist-component',
  templateUrl: './playlist-component.component.html',
  styleUrls: ['./playlist-component.component.css']
})
export class PlaylistComponentComponent implements OnInit, AfterViewInit {
  id = 1;
  playlist: Playlist;
  myPlaylist: Playlist[];
  page = 0;
  size = 5;
  totalPage = 0;
  dataSource;
  pgIndex = 2;
  firstLastButtons = true;
  pnDisabled = true;
  hdPageSize = true;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'description', 'avatar', 'userId'];
  constructor(private playlistServiceService: PlaylistServiceService) {
  }
  ngOnInit(): void {
    this.getAll();
    this.getAllMyPlaylist();
  }
  getAll(): void {
    this.playlistServiceService.getAll(this.page, this.size).subscribe(value => {
      this.playlist = value.content;
      this.totalPage = value.totalPages;
    }, error => {
      console.log(error);
    });
  }

  getAllMyPlaylist(): void{
    this.playlistServiceService.getAllMyPlaylists(this.page, this.size, this.id).subscribe( value => {
      this.myPlaylist = value.content;
      this.totalPage = value.totalPages;
    }, error => {
      console.log(error);
    });
  }

  ngAfterViewInit(): void {
  }
}
