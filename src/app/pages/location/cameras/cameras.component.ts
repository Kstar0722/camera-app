import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectCameraList } from 'src/app/store/selectors/cameras.selectors';
import { selectSeletedLocation } from 'src/app/store/selectors/locations.selectors';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  private openAdvanced = false;
  cameraList$ = this.store.pipe(select(selectCameraList));
  selectedLocation$ = this.store.pipe(select(selectSeletedLocation));
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<IAppState>) { }

  ngOnInit() {}

  onCamera(cameraId) {
    this.router.navigate([`../../../camera/${cameraId}`], { relativeTo: this.route });
  }

  toggleAdvanced() {
    this.openAdvanced = !this.openAdvanced;
  }

}
