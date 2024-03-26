import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
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

  agregarProducto() {
    console.log(this.productoForm);
  }
}
