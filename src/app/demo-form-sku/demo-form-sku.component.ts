import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrl: './demo-form-sku.component.css',
})
export class DemoFormSkuComponent {
  onSubmit(formData: { sku: string }): void {
    console.log(formData);
  }
}
