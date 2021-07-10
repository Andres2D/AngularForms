import { FormControl } from '@angular/forms';
export const nameLastNamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const CantBeStrider = (control: FormControl) => {
    const value:string = control.value !== null ? control.value.trim().toLowerCase() : '';
    if(value === 'strider'){
      return {
        noStrider: true
      }
    }
    console.log(value);
    return null;
  }