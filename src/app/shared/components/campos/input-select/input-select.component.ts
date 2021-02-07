import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { ValidarcamposService } from '../validarcampos.service';

@Component({
  selector: 'dio-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {

  @Input() titulo: string;
  @Input() formGroup: FormGroup;
  @Input() controlName: string;

  constructor(public validacao: ValidarcamposService) { }

  get formControl(): AbstractControl {
    return this.formGroup.controls[this.controlName];
  }

}
