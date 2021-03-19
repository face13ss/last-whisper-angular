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
  sort = 'name';
  totalPage = 0;
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'description', 'avatar', 'userId'];
  constructor(private playlistServiceService: PlaylistServiceService) {
  }
  ngOnInit(): void {
    // this.getAll();
    this.getAllMyPlaylist();
  }
  getAll(): void {
    this.playlistServiceService.getAll(this.page, this.size, this.sort).subscribe(value => {
      this.playlist = value.content;
      this.totalPage = value.totalElements;
    }, error => {
      console.log(error);
    });
  }
  getAllMyPlaylist(): void{
    this.playlistServiceService.getAllMyPlaylists(this.page, this.size, this.id, this.sort).subscribe( value => {
      this.myPlaylist = value.content;
      this.totalPage = value.totalElements;
    }, error => {
      console.log(error);
    });
  }
  ngAfterViewInit(): void {
  }
  onChangeEven(even: PageEvent): void{
    this.page = even.pageIndex;
    this.size = even.pageSize;
    this.getAllMyPlaylist();
  }

  takeSort(event: string): void{
    this.sort = event;
    this.getAllMyPlaylist();
  }

  searchByName(name: string): void{
    this.playlistServiceService.getAllMyPlaylistsByName(this.page, this.size, this.id, this.sort, name).subscribe(value => {
      this.myPlaylist = value.content;
      this.totalPage = value.totalElements;
    }, error => {
      console.log(error);
    });
  }
}
