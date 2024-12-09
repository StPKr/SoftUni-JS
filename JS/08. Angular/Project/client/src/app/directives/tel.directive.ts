import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { telValidator } from '../utils/tel.validator';

@Directive({
    selector: '[appTel]',
    standalone: true,
    providers: [{
        provide: NG_VALIDATORS,
        multi: true,
        useExisting: TelDirective
    }]
})
export class TelDirective implements Validator {

    validate(control: AbstractControl): ValidationErrors | null {
        return telValidator(control);
    }
}
