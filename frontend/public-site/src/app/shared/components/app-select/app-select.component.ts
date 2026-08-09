import { Component, input, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

export interface SelectOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [SelectModule, FormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppSelectComponent),
    multi: true
  }],
  templateUrl: './app-select.component.html',
  styleUrl: './app-select.component.scss'
})
export class AppSelectComponent implements ControlValueAccessor {
  readonly options = input<SelectOption[]>([]);
  readonly placeholder = input('Select an option');
  readonly inputId = input<string | null>(null);

  protected readonly selectedValue = signal<string | null>(null);
  protected readonly isDisabled = signal(false);

  private onChange: (v: string | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(v: string | null): void { this.selectedValue.set(v); }
  registerOnChange(fn: (v: string | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(d: boolean): void { this.isDisabled.set(d); }

  protected handleChange(value: string | null): void {
    this.selectedValue.set(value);
    this.onChange(value);
    this.onTouched();
  }
}
