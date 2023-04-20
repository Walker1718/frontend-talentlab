import { Component, Input, OnInit } from '@angular/core';
import { faTriangleExclamation, faPenSquare, faTrashCan, faRectangleAd} from '@fortawesome/free-solid-svg-icons';
import { Products } from 'src/app/services/products';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  @Input() products : Products[] = [];
  @Input() mensaje: string = '';
  titulo : string = 'Productos';
  faExclamation = faTriangleExclamation;
  faEditProduct = faPenSquare;
  faDeleteProduct = faTrashCan;
  faAddProduct = faRectangleAd;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() : void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data.products;
        this.mensaje = data.mensaje;
        console.log(this.products);
        console.log(this.mensaje);
      }
    );
  }

  eliminarProduct(product: Products) : void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: `Deseas eliminar el producto ${product.name} ? Esta acción no se puede revertir`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No!!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProduct(product.idProduct).subscribe(
          response => {
            this.products = this.products.filter(a => a!= product)
            swalWithBootstrapButtons.fire(
              'Eliminado!',
              'El producto ha sido eliminado',
              'success'
            )
          }
        )
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Acción cancelada',
          'El cielo es de los arrepentidos',
          'error'
        )
      }
    })
  }

}
