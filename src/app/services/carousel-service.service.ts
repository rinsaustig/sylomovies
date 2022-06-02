import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const reqUrl = environment.getNowPlaying;

@Injectable({
  providedIn: 'root',
})
export class CarouselServiceService {
  constructor(private http: HttpClient) {}

  getNowPlaying(): Observable<any> {
    return this.http.get(reqUrl);
  }
}
