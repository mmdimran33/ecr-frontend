import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewDetails: any;

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  //   this.pagesService.viewDetails().subscribe(data => {
  //     console.log('viewDetails : ' , data);
  //     this.viewDetails = data;
  //   }, error => {
  //     console.log('error : ' , error);      
  //   })
  }

}
