import { MainPageComponent } from "./dashboard/main-page/main-page.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursosComponent } from "./dashboard/cursos/cursos.component";
import { TurmasComponent } from "./dashboard/turmas/turmas.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "cursos", component: CursosComponent },
  { path: "turmas", component: TurmasComponent },
  { path: "main", component: MainPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
