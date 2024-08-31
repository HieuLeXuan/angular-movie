import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  signal,
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { MatTab, MatTabGroup } from "@angular/material/tabs";
import { MatIcon } from "@angular/material/icon";
import { SlicePipe } from "@angular/common";
import { SwiperOptions } from "swiper/types";
import { take } from "rxjs";

import { PosterCardComponent } from "../../shared/components/poster-card-view/poster-card.component";
import { MovieModel } from "../content/models/movie.model";
import { MoviesService } from "../content/services/movies.service";
import { SwiperDirective } from "../../shared/directives/swiper.directive";
import { OnTVService } from "../content/services/on-tv.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  imports: [
    PosterCardComponent,
    SwiperDirective,
    MatTabGroup,
    RouterLink,
    SlicePipe,
    MatIcon,
    MatTab,
  ],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  config: SwiperOptions = {
    watchSlidesProgress: true,
    breakpoints: {
      992: {
        slidesPerView: 6.3,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      768: {
        slidesPerView: 4.3,
        spaceBetween: 15,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      576: {
        slidesPerView: 3.3,
        spaceBetween: 15,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      320: {
        slidesPerView: 2.3,
        spaceBetween: 10,
        slidesOffsetBefore: 10,
        slidesOffsetAfter: 10,
      },
    },
  };

  movieTabList = ["Now playing", "Upcoming", "Popular"];
  moviesList = signal<MovieModel[]>([]);
  selectedMovieTab = 0;

  tvShowsTabList = ["Airing Today", "Currently Airing", "Popular"];
  tvShowsList = signal<MovieModel[]>([]);
  selectedTvShowTab = 0;

  constructor(
    private moviesService: MoviesService,
    private onTv: OnTVService
  ) {}

  ngOnInit(): void {
    this.getMovies("now_playing", 1);
    this.getTvShows("airing_today", 1);
  }

  getMovies(type: string, page: number): void {
    this.moviesService
      .getMovies(type, page)
      .pipe(take(1))
      .subscribe((res) => {
        this.moviesList.set(res.results);
      });
  }

  tabMovieChange({ index }: { index: number }) {
    console.log(index);
    this.selectedMovieTab = index;
    const movieType = ["now_playing", "upcoming", "popular"];
    const selectedType = movieType[index];
    if (selectedType) {
      this.getMovies(selectedType, 1);
    }
  }

  getTvShows(type: string, page: number): void {
    this.onTv
      .getTvShow(type, page)
      .pipe(take(1))
      .subscribe((res) => {
        this.tvShowsList.set(res.results);
      });
  }

  tabTvShowChange({ index }: { index: number }) {
    this.selectedTvShowTab = index;
    const tvShowsType = ["airing_today", "on_the_air", "popular"];
    const selectedType = tvShowsType[index];
    if (selectedType) {
      this.getTvShows(selectedType, 1);
    }
  }
  log() {
    console.log("CD home component");
  }
}
