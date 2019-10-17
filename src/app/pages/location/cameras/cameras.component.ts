import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetCameras } from 'src/app/store/actions/cameras.actions';
import { selectCameraList } from 'src/app/store/selectors/cameras.selectors';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  private openAdvanced = false;
  cameraList$ = this.store.pipe(select(selectCameraList));

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<IAppState>) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.store.dispatch(new GetCameras(id));
    });
  }

  onCamera(cameraId) {
    this.router.navigate([`../../../camera/${cameraId}`], { relativeTo: this.route });
  }

  toggleAdvanced() {
    this.openAdvanced = !this.openAdvanced;
  }

}
