import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  // Please remember the http:// part
  url = 'http://localhost:4000/api/productos';

  constructor(private http: HttpClient) {}

  // Observables are used to make async requests, as promises
  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

}
