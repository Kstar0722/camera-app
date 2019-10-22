import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-live-stream',
  templateUrl: './live-stream.component.html',
  styleUrls: ['./live-stream.component.scss']
})
export class LiveStreamComponent implements OnInit {
  private eventList = [1, 2, 3, 4, 5];
  private selectedDate = '';
  private streamData = {
    total: 20,
    data: [
      { image: require('../../../../../assets/images/video.png'), time: '12:57:00 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:57:10 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:57:20 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:57:30 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:57:40 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:57:50 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:58:00 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:58:10 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:58:20 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:58:30 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:58:40 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:58:50 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:59:00 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:59:10 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:59:20 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:59:30 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '12:59:40 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '12:59:50 PM' },
      { image: require('../../../../../assets/images/video.png'), time: '13:00:00 PM' },
      { image: require('../../../../../assets/images/img_full01.jpg'), time: '13:00:10 PM' },
    ]
  };
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onClickLive(id) {
    this.router.navigate([`../../${id}/live-stream`], { relativeTo: this.route });
  }
}
