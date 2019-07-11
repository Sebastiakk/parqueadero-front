import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from 'src/app/service/parqueadero/parqueadero.service';
import { Vehiculo } from 'src/app/component/parqueadero/interface/vehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})
export class ListarVehiculosComponent implements OnInit {

  public listaVehiculo: Array<Vehiculo> = [];

  constructor(private servicio: ParqueaderoService) { }

  ngOnInit() {
    this.obtenerVehiculos();
  }

  public obtenerVehiculos(): void {
    this.servicio.obtenerCupos().subscribe((res: any) => {
      this.listaVehiculo = res;
    })
  }

  public noHayRegistro(): boolean {
    return this.listaVehiculo.length > 0 ? false : true;
  }

  public salidaVehiculo(data: Vehiculo): void {
    this.servicio.salidaVehiculo(data.placa).subscribe((res: any) => {
      this.obtenerVehiculos();
    })
  }

  public validarSalidaVehiculo(data: Vehiculo): boolean {
    return data.horaSalida !== null ? false : true;
  }

  public iconoTipoVEhiculo(data: Vehiculo): string {
    return data.tipoVehiculo === 'Moto' ? 'directions_bike' : 'directions_car';
  }
}
