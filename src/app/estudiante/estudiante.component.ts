import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  standalone: false,
  templateUrl: './estudiante.component.html',
  styleUrl: './estudiante.component.css'
})
export class EstudianteComponent {
  estudiante = {
    nombre: 'Juan Pérez',
    carrera: 'Ingeniería de Sistemas',
    materia: 'Matemáticas',
    notas: [3.5, 2.8, 4.0, 3.2]
  };

  get promedio(): number {
    const suma = this.estudiante.notas.reduce((acc, nota) => acc + nota, 0);
    return parseFloat((suma / this.estudiante.notas.length).toFixed(2));
  }

  get estadoMateria(): string {
    return this.promedio >= 3.0 ? 'Aprobado' : 'Perdido';
  }
}
