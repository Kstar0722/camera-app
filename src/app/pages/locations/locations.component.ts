import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { GetLocations } from 'src/app/store/actions/locations.actions';
import { selectLocationList } from 'src/app/store/selectors/locations.selectors';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locationList$ = this.store.pipe(select(selectLocationList));
  private openAdvanced = false;
  constructor(
    private store: Store<IAppState>,
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetLocations());
  }

  toggleAdvanced() {
    this.openAdvanced = !this.openAdvanced;
  }
}
