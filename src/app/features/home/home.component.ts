import {
  ChangeDetectorRef,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { SlicePipe } from '@angular/common';
import { SwiperOptions } from 'swiper/types';
import { take } from 'rxjs';

import { PosterCardComponent } from '../../shared/components/poster-card-view/poster-card.component';
import { MovieModel } from '../content/models/movie.model';
import { MoviesService } from '../content/services/movies.service';
import { SwiperDirective } from '../../shared/directives/swiper.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PosterCardComponent,
    // SwiperDirective,
    MatTabGroup,
    RouterLink,
    SlicePipe,
    MatIcon,
    MatTab,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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

  constructor(
    private moviesService: MoviesService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getMovies('now_playing', 1);
  }

  getMovies(type: string, page: number): void {
    this.moviesService
      .getMovies(type, page)
      .pipe(take(1))
      .subscribe((res) => {
        this.moviesList = res.results;
        this.cdr.detectChanges(); // Manually trigger change detection
      });
  }
}
