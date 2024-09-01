import { TitleCasePipe } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { take } from "rxjs";

import { PosterCardComponent } from "../../shared/components/poster-card-view/poster-card.component";
import { PaginationModel } from "../../core/models/pagination.model";
import { MoviesService } from "./services/movies.service";
import { OnTVService } from "./services/on-tv.service";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrl: "./content.component.scss",
  imports: [
    TitleCasePipe,
    MatCardModule,
    MatButtonModule,
    PosterCardComponent,
    MatPaginatorModule,
  ],
  standalone: true,
})
export class ContentComponent implements OnInit {
  contentType: string = "";

  nowPlaying: PaginationModel[] = [];
  totalResults: any;

  constructor(
    private moviesService: MoviesService,
    private onTvService: OnTVService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.contentType = this.router.url.split("/")[1];
    console.log("content component: ", this.contentType);
  }

  ngOnInit(): void {
    if (this.contentType === "movies") {
      this.getNowPlayingMovies(1);
    } else {
      this.getNowPlayingTVShows(1);
    }
  }

  getNowPlayingMovies(page: number) {
    this.moviesService
      .getNowPlaying(page)
      .pipe(take(1))
      .subscribe(
        (res) => {
          this.totalResults = res.total_results;
          this.nowPlaying = res.results;
          this.cdr.detectChanges();
        },
        () => {}
      );
  }

  getNowPlayingTVShows(page: number) {
    this.onTvService
      .getTvOnTheAir(page)
      .pipe(take(1))
      .subscribe(
        (res) => {
          this.totalResults = res.total_results;
          this.nowPlaying = res.results;
          this.cdr.detectChanges();
        },
        () => {}
      );
  }

  changePage(event: { pageIndex: number }) {
    if (this.contentType === "movies") {
      this.getNowPlayingMovies(event.pageIndex + 1);
    } else {
      this.getNowPlayingTVShows(event.pageIndex + 1);
    }
  }
}
