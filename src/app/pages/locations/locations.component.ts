import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { AppEffects } from 'src/app/store/app.effects';
import { Actions } from '@ngrx/effects';
import { GetLocations } from 'src/app/store/app.actions';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  console = console;

  private openAdvanced = false;
  constructor(
    private state: State<IAppState>,
    private store: Store<IAppState>,
    private effect: AppEffects,
    private action: Actions
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetLocations());
  }

  toggleAdvanced() {
    this.openAdvanced = !this.openAdvanced;
  }
}
