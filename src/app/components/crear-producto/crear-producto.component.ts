import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css',
})
export class CrearProductoComponent implements OnInit{
  productoForm = new FormGroup({
    producto: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
  });

  titulo = 'Crear producto';
  // This is to get the id from the url, the 'id' param has to match the param that we included in the url in the app.routes.ts file in this route
  id = this.aRouter.snapshot.paramMap.get('id');

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private _productoService: ProductoService,
    private aRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    // We create a product object
    const PRODUCTO: Producto = {
      // We need to use the ! operator that tells typescript that even though something looks like it could be null, it can trust you that it's not
      nombre: this.productoForm.get('producto')?.value!,
      categoria: this.productoForm.get('categoria')?.value!,
      ubicacion: this.productoForm.get('ubicacion')?.value!,
      //In this case, price is a number, so we have to convert the input string to a number, simply using the + operator
      precio: +this.productoForm.get('precio')?.value!,
    };

    console.log(PRODUCTO);
    this._productoService.guardarProducto(PRODUCTO).subscribe(
      (data) => {
        this.toastr.success(
          'El producto fue registrado con exito',
          'Producto registrado'
        );
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.productoForm.reset();
      }
    );
  }

  esEditar() {
    console.log(this.id);
    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe((data) => {
        this.productoForm.setValue({
          producto: data.nombre,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
        });
      });
    }
  }
}
