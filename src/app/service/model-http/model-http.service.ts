import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ModelHttpService {

  constructor(private httpClient: HttpClient) {
  }

  get(path: string = '') {
    return this.httpClient.get(this.url(path));
  }

  post(path: string = '', data: any) {
    return this.httpClient.post(this.url(path), data);
  }

  put(path: string = '', data: any = null) {
    return this.httpClient.put(this.url(path), data);
  }

  delete(path: string = '') {
    return this.httpClient.delete(this.url(path));
  }

  private url(path): string {
    if (path === null) {
      return environment.API;
    } else {
      return environment.API + '/' + path;
    }
  }
}
