import { Component, Input, OnInit } from '@angular/core';
import { faTriangleExclamation, faPenSquare, faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Alumnos } from 'src/app/services/alumnos';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  @Input() alumnos : Alumnos[] = [];
  @Input() mensaje: string = '';
  titulo : string = 'Listado Alumnos';
  faExclamation = faTriangleExclamation;
  faEditPerson = faPenSquare;
  faDeletePerson = faTrashCan;
  faAddPerson = faUserPlus;

  constructor(private alumnoService: AlumnosService) {}

  ngOnInit(): void {
    this.getAlumnos();
  }

  getAlumnos() : void {
    this.alumnoService.getAlumnos().subscribe(
      (data) => {
        this.alumnos = data.alumnos;
        this.mensaje = data.mensaje;
        console.log(this.alumnos);
        console.log(this.mensaje);
      }
    );
  }

}
