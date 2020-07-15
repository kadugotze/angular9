import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { query } from '@angular/animations';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product : Product 

  // ActivatedRoute sera utilizado para recuperar o id na url, muito parecido com QueryString 
  constructor(private productService: ProductService, 
              private router: Router,
              private activeRoute : ActivatedRoute
              ) { }

  ngOnInit(): void {
    // Recupera o id na url, função similar a query string
    debugger;
    const id = +this.activeRoute.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }
 

  updateProduct(): void{
    this.productService.update(this.product).subscribe(()=>{
      this.productService.showMensage("Bebida alterada com sucesso!")
      this.router.navigate(['/products'])
    })

  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
