import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  private openAdvanced = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAdvancedOption() {
    this.openAdvanced = !this.openAdvanced;
  }

}
