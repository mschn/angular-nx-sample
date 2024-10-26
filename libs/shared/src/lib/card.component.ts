import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="card">
    <h3>{{ title() }}</h3>
    <ng-content></ng-content>
  </div>`,
  styles: `
    .card {
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      padding: 0.5rem;
      margin: 0.5rem;
      background: #eee;
      color: #222;
    }
    h3 {
      margin: 0;
    }
  `,
})
export class CardComponent {
  title = input('');
}
