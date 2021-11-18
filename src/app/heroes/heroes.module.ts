import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';
import { ContadorModule } from '../contador/contador.module';

@NgModule({
    declarations: [
     HeroeComponent,
     ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule,
        ContadorModule
    ]
})
export class HeroesModule{

}