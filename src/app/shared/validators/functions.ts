import { AbstractControl, ValidatorFn,} from '@angular/forms';

// Custom reactive validator for email
export function forbiddenEmailValidator(email: String) :ValidatorFn{
  return (control): {[key:string]:any} | null => {
    const forbidden = control.value === email;
    return forbidden ? {'forbiddenEmail': {value:control.value}} : null;
  }
}
