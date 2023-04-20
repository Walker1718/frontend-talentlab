import { Component, Input, OnInit } from '@angular/core';
import { faTriangleExclamation, faPenSquare, faTrashCan, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Clients } from 'src/app/services/clients';
import { ClientsService } from 'src/app/services/clients.service';

import Swal from 'sweetalert2';

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

  optionSort: { property: string | null, order : string } = { property : null, order : 'asc' };

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

  orderListClients(property : string) : void {
    const order = this.optionSort.order;
    this.optionSort = {
      property,
      order : order === 'asc' ? 'desc' : 'asc'
    }
  }

  eliminarClient(client: Clients) : void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estas seguro?',
      text: `Deseas eliminar al usuario ${client.name} ${client.lastName}. Esta acción no se puede revertir`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Me arrepiento!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientsService.deleteClient(client.idUser).subscribe(
          response => {
            this.clients = this.clients.filter(a => a != client)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'El usuario ha sido eliminado',
              'success'
            )
          }
        )        
      } 
      else if (result.dismiss === Swal.DismissReason.cancel) 
      {
        swalWithBootstrapButtons.fire(
          'Acción cancelada',
          'El cielo es de los arrepentidos',
          'error'
        )
      }
    })
  }

}
