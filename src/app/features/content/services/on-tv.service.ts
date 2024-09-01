import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class OnTVService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "https://api.themoviedb.org/3/";
    this.apiKey = environment.theMovieDBApi;
    this.language = "en-US";
    this.region = "US";
  }

  getTvShow(type: string, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/${type}?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }

  getTvOnTheAir(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`
    );
  }
}
