import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { IAppState } from 'src/app/store/state/app.state';
import { GetCameras } from 'src/app/store/actions/cameras.actions';
import { SetSelectedLocation, GetLocations } from 'src/app/store/actions/locations.actions';
import { selectSeletedLocation } from 'src/app/store/selectors/locations.selectors';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  selectedLocation$ = this.store.pipe(select(selectSeletedLocation));
  constructor(private router: Router, private route: ActivatedRoute, private store: Store<IAppState>) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('locationId');
      this.store.dispatch(new GetLocations());
      this.store.dispatch(new SetSelectedLocation(id));
      this.store.dispatch(new GetCameras(id));
    });
  }

}
