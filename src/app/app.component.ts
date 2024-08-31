import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser, NgClass } from "@angular/common";
import { NavigationEnd, Router, RouterOutlet } from "@angular/router";

import { themeColors } from "./core/constants/theme-colors";
import { Color } from "./core/enums/colors.enum";
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { FooterComponent } from "./core/components/footer/footer.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  imports: [RouterOutlet, NgClass, NavbarComponent, FooterComponent],
  standalone: true,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private isBrowser: boolean;

  themeColorList = themeColors;
  themeColorEnum = Color;
  themeColorInit: string = Color.RED;

  /* platFormId :cho phép bạn xác định môi trường mà ứng dụng đang chạy (chẳng hạn như trình duyệt hoặc server-side). */
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platFormId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platFormId);
  }

  ngOnInit(): void {
    /*
    Mặc dù đoạn mã nằm trong app.component.ts, nhưng vì AppComponent là thành phần gốc, tồn tại xuyên suốt vòng đời của ứng dụng,
    nên mọi sự kiện điều hướng xảy ra trong ứng dụng đều được AppComponent lắng nghe và xử lý. Điều này giúp đoạn mã trong AppComponent
    có thể cuộn trang lên đầu mỗi khi người dùng điều hướng, áp dụng cho toàn bộ ứng dụng.
    */
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      if (this.isBrowser) {
        window.scrollTo(0, 0);
      }
    });
  }

  changeColorTheme(color: string): void {
    this.themeColorInit = color;
  }

  checkSelectedTheme(color: string) {
    return this.themeColorInit === color;
  }

  log() {
    console.log("CD app component");
  }
}
