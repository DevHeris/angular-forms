import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrl: './demo-form-sku-with-builder.component.css',
})
export class DemoFormSkuWithBuilderComponent {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['ABC123'],
    });
  }

  onSubmit(formData: any): void {
    console.log(formData);
  }
}
