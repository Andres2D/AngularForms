import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nameLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  CantBeStrider(control: FormControl){
    const value:string = control.value !== null ? control.value.trim().toLowerCase() : '';
    if(value === 'strider'){
      return {
        noStrider: true
      }
    }
    return null;
  }

  EqualsFields(field1: string, field2: string){
    return ( formGroup: AbstractControl): ValidationErrors => {
      const fieldOne = formGroup.get(field1).value;
      const fieldTwo = formGroup.get(field2).value;

      if(fieldOne !== fieldTwo){
        formGroup.get(field2).setErrors({ notEquals: true });
        return { notEquals: true }
      }

      formGroup.get(field2).setErrors(null);

      return null;
    }
  }
}
