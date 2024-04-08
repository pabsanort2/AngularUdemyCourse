import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  // Please remember the http:// part
  url = 'http://localhost:4000/api/productos/';

  constructor(private http: HttpClient) {}

  // Observables are used to make async requests, as promises
  getProductos(): Observable<any> {
    return this.http.get(this.url);
  }

  eliminarProducto(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.url, producto);
  }

  obtenerProducto(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
}
