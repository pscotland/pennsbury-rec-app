import { Component, input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  standalone: true,
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormFieldComponent {
  readonly label = input.required<string>();
  readonly fieldId = input<string | null>(null);
  readonly required = input(false);
  readonly optional = input(false);
  readonly errorMessage = input<string | null>(null);
}
