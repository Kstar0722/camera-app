import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  private openAdvanced = false;
  constructor(private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
  }

  onCamera(cameraId) {
    this.router.navigate([`../../../camera/${cameraId}`], { relativeTo: this.route });
  }

  toggleAdvanced() {
    this.openAdvanced = !this.openAdvanced;
  }

}
