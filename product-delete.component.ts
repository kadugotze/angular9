import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product : Product

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute,
              private router : Router) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product=>{
      this.product = product
    })
  }
  deleteProduct(): void{
  
        this.productService.delete(this.product.id).subscribe(()=>{
          this.productService.showMensage("Bebida apagada com sucesso!")
          this.router.navigate(['/products/'])
        })
  }

  cancel():void {
    this.router.navigate(['/products/'])
  }

}
