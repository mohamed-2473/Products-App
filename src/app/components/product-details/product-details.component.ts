import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  products = new ProductsComponent().products; // Access products directly

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === productId);
  }

  calculateDiscountedPrice(price: number, discount: number): number {
    return price - (price * discount / 100);
  }
}