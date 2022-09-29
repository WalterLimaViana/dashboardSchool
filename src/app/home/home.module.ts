import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreModule } from "../core/core.module";
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, CoreModule, RouterModule],
  declarations: [HomeComponent, LoginComponent],
  exports: [HomeComponent],
})
export class HomeModule {}
