import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes: string[] = ['IronMan','Batman','Hulk'];
  heroeBorrado:string='';

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado= this.heroes.shift() || '';
  }
  

}
