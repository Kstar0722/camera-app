import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { MainService } from '../../service/service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private isOpenMobileSidebar = false;
  private routeUrl = '';
  constructor(
    private mainService: MainService,
    private router: Router
  ) {
    this.mainService.sidebarEmitter.subscribe(res => {
      this.isOpenMobileSidebar = res;
    });
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setRouteUrl(val.url);
      }
    });
  }

  ngOnInit() {
  }

  setRouteUrl(url) {
    if (url && url.split('/').length >= 2) {
      this.routeUrl = url.split('/')[1];
    }
  }
  toggleSidebar() {
    this.mainService.triggerSiderClickEvent(!this.isOpenMobileSidebar);
  }
}
