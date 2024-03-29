import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  // Had to import RouterModule to this child component since the routerLink was not working if it was not imported
  imports: [RouterModule, HttpClientModule, CommonModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css',
})
export class ListarProductosComponent implements OnInit {

  listProductos: Producto [] = [];

  constructor(private _productoService: ProductoService) {}
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(
      (data) => {
        console.log(data);
        this.listProductos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
