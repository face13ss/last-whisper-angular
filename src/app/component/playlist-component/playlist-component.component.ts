import {Component, OnInit} from '@angular/core';
import {PlaylistServiceService} from '../../service/playlist/playlist-service.service';

@Component({
  selector: 'app-playlist-component',
  templateUrl: './playlist-component.component.html',
  styleUrls: ['./playlist-component.component.css']
})
export class PlaylistComponentComponent implements OnInit {

  playlist: any;
  page = 0;
  size = 10;
  totalPage = 0;

  constructor(private playlistServiceService: PlaylistServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.playlistServiceService.getAll(this.page, this.size).subscribe(value => {
      this.playlist = value;
      // this.totalPage = value.propertyName.totalPage.valueOf();
      console.log(value);
      // this.totalPage = value.data.totalPages;
    }, error => {
      console.log(error);
    });
    // console.log(this.playlistServiceService.getAll(this.page, this.size));
  }

  // /**  */
  // previousButton(){
  //   this.page--;
  //   this.getAll();
  // }
  // nextButton(){
  //   this.page++;
  //   this.getAll();
  // }
  //
  // searchByName(name:string){
  //   this.employeeService.getEmployeeByName(name).subscribe(value =>{
  //     this.employees = value.data.content;
  //   });
  //   console.log(this.employees);
  // }

}
