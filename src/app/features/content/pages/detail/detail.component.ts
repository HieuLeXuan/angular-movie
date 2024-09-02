import {
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { MatProgressBar } from "@angular/material/progress-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { DatePipe, NgOptimizedImage } from "@angular/common";
import { take } from "rxjs";
import {
  MatDialog,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { DomSanitizer } from "@angular/platform-browser";

import { IMovie } from "../../models/interfaces/movie.interface";
import { ITV } from "../../models/interfaces/tv.interface";
import { MoviesService } from "../../services/movies.service";
import { OnTVService } from "../../services/on-tv.service";
import { IContent } from "../../models/interfaces/content.interface";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrl: "./detail.component.scss",
  imports: [
    MatProgressBar,
    NgOptimizedImage,
    DatePipe,
    MatIcon,
    MatButton,
    MatDialogContent,
    MatDialogTitle,
  ],
  standalone: true,
})
export class DetailComponent implements OnInit {
  contentType = "";
  content!: Partial<IMovie | ITV | any>;

  video: IContent | null = null;
  isLoading = true;

  @ViewChild("matTrailerDialog") matTrailerDialog!: TemplateRef<any>;

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: OnTVService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    public trailerDialog: MatDialog,
    private cdr: ChangeDetectorRef
  ) {
    this.contentType = this.router.url.split("/")[1];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params["url"];

      if (this.contentType === "movies") {
        this.getMovie(id);
        this.getMovieVideo(id);
      } else {
      }
    });
  }

  getMovie(id: string) {
    this.isLoading = true;

    this.moviesService
      .getMovie(id)
      .pipe(take(1))
      .subscribe((movie) => {
        this.content = movie;
        this.isLoading = false;
        this.cdr.detectChanges();
      });
  }

  getMovieVideo(id: string) {
    this.moviesService
      .getMovieVideos(id)
      .pipe(take(1))
      .subscribe((res) => {
        if (res?.results?.length > 0) {
          const trailerList = res.results.filter(
            (video: { type: string }) => video.type === "Trailer"
          );
          this.video = trailerList[0];
          if (this.video) {
            this.video["url"] = this.sanitizer.bypassSecurityTrustResourceUrl(
              "https://www.youtube.com/embed/" + this.video["key"]
            );
          }
        } else {
          this.video = null;
        }
        this.cdr.detectChanges();
      });
  }

  openDialog(): void {
    const dialogRef = this.trailerDialog.open(this.matTrailerDialog, {});
    dialogRef.disableClose = false;
  }
}
