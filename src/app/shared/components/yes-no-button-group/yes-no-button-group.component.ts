import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {
  @Input() public value: string = null;
  @Input() public label: string = '';
  @Output() public valueChange = new EventEmitter<string>();

  public options = YesNoButtonGroupOptions;

  public onChange = (value: string) => { };
  public onTouched = (value: string) => { };

  public activate(value: string) {
    this.value = value;
    this.valueChange.emit(this.value);
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (value: string) => void): void {
    this.onTouched = fn
  }

  public setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
