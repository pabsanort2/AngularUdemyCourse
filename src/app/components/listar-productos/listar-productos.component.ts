import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { HttpClientModule } from '@angular/common/http';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private _productoService: ProductoService, private toastr: ToastrService) {}
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(
      (data) => {
        this.listProductos = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito', 'Producto eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

}
