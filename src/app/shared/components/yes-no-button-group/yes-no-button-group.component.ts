import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { UniqueIdService } from '../../servives/unique-id/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => YesNoButtonGroupComponent)
  }]
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {

  @Input() public disabled: boolean;
  @Input() public value: string = null;
  @Input() public label: string = '';
  @Output() public valueChange = new EventEmitter<string>();

  public id: string = null;
  public options = YesNoButtonGroupOptions;

  constructor(
    private uniqueIdService: UniqueIdService
  ) {
    this.id = this.uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  public onChange = (value: string) => { };
  public onTouched = (value: string) => { };

  public activate(value: string) {
    this.writeValue(value);
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: (value: string) => void): void {
    this.onTouched = fn
  }

  public setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
