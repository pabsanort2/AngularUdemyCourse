import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Producto } from '../../models/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css',
})
export class CrearProductoComponent {

  productoForm = new FormGroup({
    producto: new FormControl('', Validators.required),
    categoria: new FormControl('', Validators.required),
    ubicacion: new FormControl('', Validators.required),
    precio: new FormControl('', Validators.required),
  });

  constructor(private router: Router, private toastr: ToastrService){}

  agregarProducto() {
    // We create a product object
    const PRODUCTO: Producto = {
      // We need to use the ! operator that tells typescript that even though something looks like it could be null, it can trust you that it's not 
      nombre: this.productoForm.get("producto")?.value!,
      categoria: this.productoForm.get("categoria")?.value!,
      ubicacion: this.productoForm.get("ubicacion")?.value!,
      //In this case, price is a number, so we have to convert the input string to a number, simply using the + operator
      precio: +this.productoForm.get('precio')?.value!,
    }

    console.log(PRODUCTO);
    this.toastr.success('El producto fue registrado con exito', 'Producto registrado')
    this.router.navigate(['/'])
  }
}
