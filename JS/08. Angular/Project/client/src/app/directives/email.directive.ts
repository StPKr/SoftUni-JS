// import { Directive, input } from '@angular/core';
// import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
// import { emailValidator } from '../utils/email.validator';

// @Directive({
//   selector: '[appEmail]',
//   standalone: true,
//   providers: [{
//     provide: NG_VALIDATORS,
//     multi: true,
//     useExisting: EmailDirective
//   }]
// })
// export class EmailDirective implements Validator {
//   @input appEmail: string[] = []; - should be passed from the component with [appEmail]

//   constructor() { }

//   validate(control: AbstractControl): ValidationErrors | null {
//     const ValidatorFn = emailValidator(this.appEmail);

//     return (ValidatorFn(control));
//   }
// }
