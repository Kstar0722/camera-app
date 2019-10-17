import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import environment from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {
  constructor(private http: HttpClient) { }

  getCameras(id: string) {
    return this.http.get(`${environment.apiUrl}/cameras?location_id=${id}`);
  }
}
