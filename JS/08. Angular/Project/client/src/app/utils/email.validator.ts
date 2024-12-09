import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex: RegExp = /^[^@]+@[^@]+\.[^@]+$/;

    if (control.value && !emailRegex.test(control.value)) {
        return { invalidEmail: true };
    }

    return null;
}