import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  userData: any = null;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.userData = this.commonService.getUserData() ? this.commonService.getUserData() : null;
    console.log('userData : ' , this.userData);
    
  }

}
