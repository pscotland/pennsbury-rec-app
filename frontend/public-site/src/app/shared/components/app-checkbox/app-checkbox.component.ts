import { Component, input, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CheckboxModule, FormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppCheckboxComponent),
    multi: true
  }],
  templateUrl: './app-checkbox.component.html',
  styleUrl: './app-checkbox.component.scss'
})
export class AppCheckboxComponent implements ControlValueAccessor {
  readonly label = input.required<string>();
  readonly checkboxId = input<string | null>(null);

  protected readonly checked = signal(false);
  protected readonly isDisabled = signal(false);

  private onChange: (v: boolean) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(v: boolean): void { this.checked.set(!!v); }
  registerOnChange(fn: (v: boolean) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(d: boolean): void { this.isDisabled.set(d); }

  protected handleChange(value: boolean): void {
    this.checked.set(value);
    this.onChange(value);
    this.onTouched();
  }
}
