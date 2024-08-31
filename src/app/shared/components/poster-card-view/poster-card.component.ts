import { Component, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { DatePipe, NgOptimizedImage } from "@angular/common";

import { ImgMissingDirective } from "../../directives/img-missing.directive";

@Component({
  selector: "app-poster-card",
  standalone: true,
  imports: [RouterLink, ImgMissingDirective, DatePipe, NgOptimizedImage],
  templateUrl: "./poster-card.component.html",
  styleUrl: "./poster-card.component.scss",
})
export class PosterCardComponent {
  model = input<any>();
  isMovie = input<boolean>();
}
