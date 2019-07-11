import { Injectable } from '@angular/core';
import { ModelHttpService } from '../model-http/model-http.service';
import { Vehiculo } from 'src/app/component/parqueadero/interface/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ParqueaderoService {

  constructor(private http: ModelHttpService) { }

  crearVehiculo(data: Vehiculo) {
    return this.http.post(null, data);
  }

  salidaVehiculo(placa: string) {
    return this.http.put(placa);
  }

  obtenerCupos() {
    return this.http.get();
  }
}
