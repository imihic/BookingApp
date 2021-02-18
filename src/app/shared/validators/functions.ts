import {AbstractControl, FormGroup, ValidatorFn, ValidationErrors} from '@angular/forms';

// Custom reactive validator for email
export function forbiddenEmailValidator(email: String) :ValidatorFn{
  return (control): ValidationErrors | null => {
    const forbidden = control.value === email;
    return forbidden ? {'forbiddenEmail': {value:control.value}} : null;
  };
}

// custom reactive validator for checking are passwords same
export function sameAsValidator(controls: string[]): ValidatorFn {
  return (control: FormGroup): ValidationErrors | null => {
    const firstControl = control.get(controls[0]);
    const secondControl = control.get(controls[1]);

    if(!firstControl || !secondControl) {
      return null;
    }

    return firstControl.value !== secondControl.value ? {'sameAs': {value: control.value}} : null;
  }
}
