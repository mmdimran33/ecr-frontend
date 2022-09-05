import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    console.log('ngOnInit invoked and testing!!!!!!!!!!!!!');
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
