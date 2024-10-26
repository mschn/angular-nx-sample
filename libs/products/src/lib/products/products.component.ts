import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@angular-nx/shared';
@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `<h2>Products</h2>
    @for (product of products; track product.name) {
      <div class="card">
        <h3>{{ product.name }}</h3>
        <div>\${{ product.price }}</div>
      </div>
    } `,
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products = [
    { name: 'Bread', price: 1.5 },
    { name: 'Shirt', price: 60 },
    { name: 'Water', price: 0.99 },
    { name: 'Table', price: 200 },
  ];
}
