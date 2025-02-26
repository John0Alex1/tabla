import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  art = { codigo: 0, descripcion: '', precio: 0 };
  articulos = [
    { codigo: 1, descripcion: 'Mandarinas', precio: 1500 },
    { codigo: 2, descripcion: 'Guanábanas', precio: 5400 },
    { codigo: 3, descripcion: 'Melón', precio: 4800 },
    { codigo: 4, descripcion: 'Fresas', precio: 6700 },
    { codigo: 5, descripcion: 'Piñas', precio: 4200 }
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  agregar() {
    if (this.articulos.some(a => a.codigo === this.art.codigo)) {
      alert('El código ya existe');
      return;
    }
    this.articulos.push({ ...this.art });
    this.limpiar();
  }

  borrar(codigo: number) {
    this.articulos = this.articulos.filter(a => a.codigo !== codigo);
  }

  seleccionar(art: any) {
    this.art = { ...art };
  }

  modificar() {
    const index = this.articulos.findIndex(a => a.codigo === this.art.codigo);
    if (index !== -1) {
      this.articulos[index] = { ...this.art };
    }
    this.limpiar();
  }

  limpiar() {
    this.art = { codigo: 0, descripcion: '', precio: 0 };
  }
}
