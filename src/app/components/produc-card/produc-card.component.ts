import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produc-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produc-card.component.html',
  styleUrls: ['./produc-card.component.css']
})
export class ProducCardComponent {
  @Input() productItem: any;

  constructor(private router: Router) {}

  viewProductDetails(event: Event, productId: number): void {
    event.stopPropagation();
    this.router.navigate(['/product', productId]);
  }
}