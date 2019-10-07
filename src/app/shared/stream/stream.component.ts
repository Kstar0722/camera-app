import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})


export class StreamComponent implements OnInit {

  @Input() streamData: any;
  @Input() interval: number;

  private isPlay = false;
  private imageIndex = 0;
  private progress = 0;
  private intervalData: any;

  constructor() { }

  ngOnInit() {
    this.imageIndex = 0;
    this.progress = 0;
    if (!this.interval) {
      this.interval = 5;
    }
  }

  togglePlay() {
    this.isPlay = !this.isPlay;
    if (this.isPlay) {
      if (this.imageIndex === this.streamData.total - 1) {
        this.imageIndex = 0;
        this.progress = 0;
      }
      this.intervalData = setInterval(() => {
        if (this.imageIndex < this.streamData.total - 1) {
          this.imageIndex += 1;
          this.progress = (this.imageIndex) / (this.streamData.total - 1) * 100;
        } else {
          clearInterval(this.intervalData);
          this.isPlay = false;
        }
      }, this.interval * 1000);
    } else {
      clearInterval(this.intervalData);
    }
  }

  onFullScreen() {
    const element = document.getElementById('video');
    if (document.fullscreenEnabled) {
      this.requestFullscreen(element);
    }
  }

  requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
  }
}
