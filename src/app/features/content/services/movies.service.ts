import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment";
import { MovieModel } from "../models/movie.model";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
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

  getMovies(type: string, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${type}?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }
}
