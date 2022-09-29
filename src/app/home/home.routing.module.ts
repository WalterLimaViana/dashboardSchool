import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "", component: HomeComponent },
];

@NgModule({})
export class HomeRountingModule {}
