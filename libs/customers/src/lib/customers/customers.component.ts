import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '@angular-nx/shared';

@Component({
  selector: 'lib-customers',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <h2>Customers</h2>
    @for (customer of customers; track customer.name) {
      <lib-card [title]="customer.name">
        <div>From {{ customer.city }}</div>
      </lib-card>
    }
  `,
  styleUrl: './customers.component.css',
})
export class CustomersComponent {
  customers = [
    { name: 'Roland', city: 'Gilead' },
    { name: 'Eddie', city: 'New York' },
    { name: 'Odetta', city: 'New York' },
    { name: 'Jake', city: 'New York' },
  ];
}
