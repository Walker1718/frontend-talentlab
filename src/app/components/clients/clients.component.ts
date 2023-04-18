import { Component, Input, OnInit } from '@angular/core';
import { faTriangleExclamation, faPenSquare, faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Clients } from 'src/app/services/clients';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit{

  @Input() clients : Clients[] = [];
  @Input() mensaje: string = '';
  titulo : string = 'Listado Clientes';
  faExclamation = faTriangleExclamation;
  faEditPerson = faPenSquare;
  faDeletePerson = faTrashCan;
  faAddPerson = faUserPlus;

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() : void {
    this.clientsService.getClients().subscribe(
      (data) => {
        this.clients = data.clients;
        this.mensaje = data.mensaje;
        console.log(this.clients);
        console.log(this.mensaje);
      }
    );
  }

}
