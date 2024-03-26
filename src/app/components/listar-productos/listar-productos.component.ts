import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  standalone: true,
  // Had to import RouterModule to this child component since the routerLink was not working if it was not imported
  imports: [RouterModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {

}
