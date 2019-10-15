import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get('https://wa-sensai-api-ussc-dev.azurewebsites.net/api/Locations');
  }
}
