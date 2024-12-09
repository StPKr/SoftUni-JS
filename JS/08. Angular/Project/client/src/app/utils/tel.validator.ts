import { AbstractControl, ValidationErrors } from '@angular/forms';

export function telValidator(control: AbstractControl): ValidationErrors | null {
    const telRegex: RegExp = /^\+\d{1,3} \d{3}-\d{3}-\d{4}$/;

    if (control.value && !telRegex.test(control.value)) {
        return { invalidTel: true };
    }

    return null;
}
