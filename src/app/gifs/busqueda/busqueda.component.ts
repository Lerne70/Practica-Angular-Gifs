import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent  {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService) {}

  buscar() {
    const valior = this.txtBuscar.nativeElement.value;

    if (valior.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(valior);

    this.txtBuscar.nativeElement.value = '';
  }

}
