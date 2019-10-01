import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MainService {
  sidebarEmitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  public triggerSiderClickEvent(isOpen: boolean) {
    this.sidebarEmitter.emit(isOpen);
  }
}
