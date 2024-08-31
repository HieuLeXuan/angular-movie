import { Component, HostListener, OnInit, output } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatAnchor, MatIconButton } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { NgOptimizedImage } from "@angular/common";

import { themeColors } from "../../constants/theme-colors";
import { Color } from "../../enums/colors.enum";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  imports: [
    MatMenuModule,
    RouterLinkActive,
    NgOptimizedImage,
    RouterLink,
    MatIconModule,
    MatAnchor,
    MatIconButton,
  ],
  standalone: true,
})
export class NavbarComponent implements OnInit {
  changeColorTheme = output<string>();

  themeColorList = themeColors;
  themeColorInit: string = Color.RED;

  isScrolled = false;

  @HostListener("window:scroll")
  scrollEvent() {
    this.isScrolled = window.scrollY >= 30;
  }

  ngOnInit(): void {
    console.log("nav bar component init");
  }

  setColorTheme(color: string) {
    this.themeColorInit = color;
    this.changeColorTheme.emit(color);
  }
}
