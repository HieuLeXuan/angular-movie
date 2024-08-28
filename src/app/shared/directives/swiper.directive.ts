import { AfterViewInit, Directive, ElementRef, input } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { Swiper, SwiperOptions } from 'swiper/types';

@Directive({
  selector: '[appSwiper]',
  standalone: true,
})
export class SwiperDirective implements AfterViewInit {
  config = input<SwiperOptions>();

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    new Swiper(this.el.nativeElement, this.config());
  }
}
