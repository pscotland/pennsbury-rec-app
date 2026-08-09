import { Component, input, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [TextareaModule, FormsModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppTextareaComponent),
    multi: true
  }],
  templateUrl: './app-textarea.component.html',
  styleUrl: './app-textarea.component.scss'
})
export class AppTextareaComponent implements ControlValueAccessor {
  readonly rows = input(5);
  readonly placeholder = input('');
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
    const v = (event.target as HTMLTextAreaElement).value;
    this.value.set(v);
    this.onChange(v);
  }

  protected handleBlur(): void {
    this.onTouched();
  }
}
