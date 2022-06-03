import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SingleMovieService {
  urlReq = environment.reqUrl;
  apiKey = environment.apiKey;
  language = environment.language;
  constructor(private http: HttpClient) {}

  getMovieDetails(id: number) {
    return this.http.get(`${this.urlReq}${id}${this.apiKey}${this.language}`);
  }

  getCast(id: number) {
    return this.http.get(
      `${this.urlReq}${id}/credits${this.apiKey}${this.language}`
    );
  }
}
