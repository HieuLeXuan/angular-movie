import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { SlicePipe } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { take } from 'rxjs';

import { PosterCardComponent } from '../../shared/components/poster-card-view/poster-card.component';
import { MovieModel } from '../content/models/movie.model';
import { MoviesService } from '../content/services/movies.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatTabGroup,
    MatTab,
    MatIcon,
    SlicePipe,
    PosterCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
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

  movieTabList = ['Now playing', 'Upcoming', 'Popular'];
  moviesList: Array<MovieModel> = [];

  tvShowsTabList = ['Airing Today', 'Currently Airing', 'Popular'];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies('now_playing', 1);
  }

  getMovies(type: string, page: number): void {
    this.moviesService
      .getMovies(type, page)
      .pipe(take(1))
      .subscribe((res) => {
        this.moviesList = res.results;
      });
  }
}
