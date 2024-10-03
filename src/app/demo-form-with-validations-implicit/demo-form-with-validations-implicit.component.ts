import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-validations-implicit',
  templateUrl: './demo-form-with-validations-implicit.component.html',
  styleUrl: './demo-form-with-validations-implicit.component.css',
})
export class DemoFormWithValidationsImplicitComponent {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required],
    });
  }

  onSubmit(formData: any): void {
    console.log(formData);
  }
}
