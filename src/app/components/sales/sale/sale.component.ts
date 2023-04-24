import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sales } from 'src/app/services/sales';
import { SalesService } from 'src/app/services/sales.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit{
  idSale: number = 0;
  isAdmin: boolean = false;
  @Input() sale: Sales = new Sales();
  constructor(
    private route: ActivatedRoute,
    private salesService: SalesService,
    
  ) {}

  ngOnInit(): void {
    this.idSale = this.route.snapshot.params['id'];
    this.isAdmin = this.route.snapshot.queryParamMap.get('admin') === 'true';
    this.salesService.getSale(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.sale = data.sale
        
      }
    )
    console.log(this.route.snapshot.queryParamMap.get('admin') === 'true')
  }

  onSubmit(): void {
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };

    if (DATA !== null) {

      html2canvas(DATA, options).then((canvas) => {

        const img = canvas.toDataURL('image/PNG');
        const bufferX = 15;
        const bufferY = 15;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
        return doc;
      }).then((docResult) => {
        docResult.save(`${new Date().toISOString()}_resumen_compra.pdf`);
      });
    }
  } 
}
