import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { register as registerSwiperElements } from "swiper/element/bundle";
import { environment } from "./environments/environment";
import { enableProdMode } from "@angular/core";

// Register Swiper custom elements. We do this
// before bootstrapping the Angular application
// so that they're available before any part of
// our application tries rendering them.
registerSwiperElements();

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
