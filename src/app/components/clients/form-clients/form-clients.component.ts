import { Component, OnInit } from '@angular/core';
import { Clients } from 'src/app/services/clients';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ClientsService } from 'src/app/services/clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-clients',
  templateUrl: './form-clients.component.html',
  styleUrls: ['./form-clients.component.css']
})
export class FormClientsComponent implements OnInit{

  titleCreate : string = "Formulario Registro Nuevo Usuario";
  client: Clients = new Clients();
  submitted : boolean = false;

  private emailPattern : any = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

  form: FormGroup = new FormGroup({
    rut: new FormControl(''),
    name : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getClient();
    this.form = this.formBuilder.group(
      {
        rut : [
          '',
          [
            Validators.required,
            Validators.maxLength(20)
          ]
        ],
        name : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        lastName : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        email : [
          '',
          [
            Validators.required,
            Validators.maxLength(255),
            Validators.pattern(this.emailPattern)
          ]
        ],
        
      }
    )
  }

  get f():  { [key: string] : AbstractControl } {
    return this.form.controls;
  }

  onSubmit() : void {
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.createClient();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  createClient() : void {
    this.clientService.createClients(this.client).subscribe(
      client => {
        console.log(client);
        this.router.navigate(['/clients']);
        Swal.fire({
          icon: 'success',
          title: 'Nuevo usuario registro',
          text: 'El usuario ' + client.name + ' ' + client.lastName + ' ha sido registrado satisfactoriamente',
        });
      }
    );
  }

  getClient(): void {
    this.activatedRoute.params.subscribe(params => {
      let idUser = params['idUser'];
      if(idUser){
        this.clientService.getClient(idUser).subscribe(
          (client) => this.client = client
        )
      }
    });
  }


}
