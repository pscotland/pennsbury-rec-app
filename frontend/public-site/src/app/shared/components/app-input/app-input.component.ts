import { Component, input, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppInputComponent),
    multi: true
  }],
  templateUrl: './app-input.component.html',
  styleUrl: './app-input.component.scss'
})
export class AppInputComponent implements ControlValueAccessor {
  readonly type = input<string>('text');
  readonly placeholder = input('');
  readonly iconLeft = input<string | null>(null);
  readonly iconRight = input<string | null>(null);
  readonly inputId = input<string | null>(null);

  protected readonly value = signal('');
  protected readonly isDisabled = signal(false);

  private onChange: (v: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(v: string): void { this.value.set(v ?? ''); }
  registerOnChange(fn: (v: string) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(d: boolean): void { this.isDisabled.set(d); }

  protected handleInput(event: Event): void {
    const v = (event.target as HTMLInputElement).value;
    this.value.set(v);
    this.onChange(v);
  }

  protected handleBlur(): void {
    this.onTouched();
  }
}
