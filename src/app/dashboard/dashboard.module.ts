import { RouterModule } from "@angular/router";
import { CursosModule } from "./cursos/cursos.module";
import { NgModule } from "@angular/core";
import { TurmasModule } from "./turmas/turmas.module";
import { CoreModule } from "../core/core.module";
import { MainPageModule } from "./main-page/main-page.module";
import { TplataformaComponent } from './tplataforma/tplataforma.component';
import { AcrobatPlatformaComponent } from './acrobat-platforma/acrobat-platforma.component';

@NgModule({
  imports: [
    CursosModule,
    TurmasModule,
    CoreModule,
    RouterModule,
    MainPageModule,
  ],
  declarations: [TplataformaComponent, AcrobatPlatformaComponent],
})
export class DashboardModule {}
