import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamyc',
  templateUrl: './dinamyc.component.html',
  styles: []
})
export class DinamycComponent {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favourites: this.fb.array([
      ['Fifa 21', Validators.required],
      ['Call of Duty', Validators.required]
    ], Validators.required)
  });

  newFavourite: FormControl = this.fb.control('', Validators.required);

  get favouritesArr(){
    return this.myForm.get('favourites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  InvalidField(field: string){
    return this.myForm.controls[field].touched && this.myForm.controls[field].errors; 
  }

  AddGame(){
    if(this.newFavourite.invalid){return;}

    this.favouritesArr.push(this.fb.control(this.newFavourite.value, Validators.required));

    this.newFavourite.reset();
  }

  DeleteGame(index: number){
    this.favouritesArr.removeAt(index);
  }

  Save(){
    if(this.myForm.invalid){
        this.myForm.markAllAsTouched();
    }
    console.log(this.myForm.value);
  }

}
