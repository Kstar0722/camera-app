import { Component, OnInit } from '@angular/core';

import { VgAPI } from 'videogular2/compiled/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  vg: VgAPI;
  constructor() { }

  ngOnInit() {
  }

  onPlayerReady(api: VgAPI) {
    this.vg = api;
  }

  fullscreen() {
    this.vg.fsAPI.toggleFullscreen();
  }
}
