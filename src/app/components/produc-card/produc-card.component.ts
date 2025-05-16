import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produc-card',
  imports: [CommonModule],
  templateUrl: './produc-card.component.html',
  styleUrl: './produc-card.component.css'
})
export class ProducCardComponent {
  @Input() productItem: any;
product: any;

  constructor(private router: Router) {}

  viewProductDetails(productId: number): void {
  this.router.navigate(['/product', productId]);
}
}
