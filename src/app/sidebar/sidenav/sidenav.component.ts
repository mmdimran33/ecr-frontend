import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/modules/pages/common.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  roles: any;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    // this.roles = this.commonService.getRoles();
    // console.log('roles sidenav : ' , this.roles);
    this.roles = sessionStorage.getItem('role');
    console.log('roles : ' , this.roles);
    
    
  }

}
