import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  private openAdvanced = false;
  constructor() { }

  ngOnInit() {
  }

  toggleAdvanced() {
    this.openAdvanced = !this.openAdvanced;
  }
}
