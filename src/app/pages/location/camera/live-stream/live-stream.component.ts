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
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onClickLive(id) {
    this.router.navigate([`../../${id}/live-stream`], { relativeTo: this.route });
  }
}
