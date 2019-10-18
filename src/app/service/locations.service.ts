import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get(`${environment.apiUrl}/Locations`);
  }
}
