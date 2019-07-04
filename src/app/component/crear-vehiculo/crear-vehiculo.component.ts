import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/interface/vehiculo';
import { TipoVehiculo } from 'src/app/interface/tipo-vehiculo';
import { Router } from '@angular/router'
import { ParqueaderoService } from 'src/app/service/parqueadero/parqueadero.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {
  public form: Vehiculo;
  public tipoVehiculo: Array<TipoVehiculo>;
  constructor(private servicio: ParqueaderoService, private router: Router, private toast: MatSnackBar) {
  }

  ngOnInit() {
    this.tipoVehiculo = this.setTipoVehiculo();
    this.form = this.setFormulario();
  }

  public setFormulario(): Vehiculo {
    return {
      placa: null,
      tipoVehiculo: null
    };
  }

  public setTipoVehiculo(): Array<TipoVehiculo> {
    return [
      { id: 'Carro', nombre: 'Carro' },
      { id: 'Moto', nombre: 'Moto' }
    ];
  }

  public esMoto(): boolean {
    if (this.form.tipoVehiculo === 'Moto') {
      return true;
    } else {
      return false;
    }
  }

  public guardarVehiculo(): void {
    if (!this.validarForm()) {
      this.servicio.crearVehiculo(this.form).subscribe((res: any) => {
        this.router.navigate(['/listar']);
        this.form = this.setFormulario();
      }, err => {
        this.toastInfo(err.error.message);
      });
    } else {
      this.toastInfo('Faltan campos por llenar');
    }
  }

  public validarForm(): boolean {
    let valido: boolean = false;
    for (const i in this.form) {
      if (this.form[i] === null || this.form[i] === '') {
        valido = true;
      }
    }
    return valido;
  }

  toastInfo(mensaje: string): void {
    this.toast.open(mensaje, null, {
      duration: 2000,
    });
  }

 
}
