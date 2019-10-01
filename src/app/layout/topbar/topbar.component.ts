import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/service';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  private openDropDown = false;
  private openMobileSearch = false;
  private openMobileSideBar = false;

  constructor(
    private mainService: MainService
  ) {
    this.mainService.sidebarEmitter.subscribe(res => {
      this.openMobileSideBar = res;
    });
  }

  ngOnInit() {
  }

  toggleDropDown() {
    this.openDropDown = !this.openDropDown;
  }
  toggleMobileSearchBar() {
    this.openMobileSearch = !this.openMobileSearch;
  }
  onToggleSidebar() {
    this.mainService.triggerSiderClickEvent(!this.openMobileSideBar);
  }
}
