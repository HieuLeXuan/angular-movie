import { Component, HostListener, output } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';

import { themeColors } from '../../constants/theme-colors';
import { Color } from '../../enums/colors.enum';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconButton,
    MatIconModule,
    RouterLink,
    MatMenuModule,
    MatButtonModule,
    RouterLinkActive,
    NgOptimizedImage,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  changeColorTheme = output<string>();

  themeColorList = themeColors;
  themeColorInit: string = Color.RED;

  isScrolled = false;

  @HostListener('window: scroll')
  scrollEvent() {
    this.isScrolled = window.scrollY >= 30;
  }

  setColorTheme(color: string) {
    console.log('clicked!');
    this.themeColorInit = color;
    this.changeColorTheme.emit(color);
  }
}
