import { DashboardModule } from "./dashboard/dashboard.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AppRoutingModule } from "./app.routing.module";
import { CoreModule } from "./core/core.module";
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
