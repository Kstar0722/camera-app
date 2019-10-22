import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  private active = 'live-stream';
  private openMobileTab = false;
  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const urlList = val.url.split('/');
        if (urlList.length < 6) {
          this.active = 'live-stream';
        } else {
          this.active = urlList.slice(-1).pop();
        }
      }
    });
  }

  ngOnInit() {
    this.openMobileTab = false;
  }

  onClickTab(tabLink) {
    this.openMobileTab = !this.openMobileTab;
    this.router.navigate([`./${tabLink}`], { relativeTo: this.route });
  }

}
