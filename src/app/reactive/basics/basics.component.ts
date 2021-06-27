import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: []
})
export class BasicsComponent implements OnInit {

  /*myForm: FormGroup = new FormGroup({
    name: new FormControl('Mouse 3r'),
    price: new FormControl(0),
    stock: new FormControl(0)
  });*/

  myForm: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
    price: [null, [Validators.required, Validators.min(0)]],
    stock: [null, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm.reset({
      name: 'Test',
      price: 100,
      stock: 4
    })
  }

  InvalidField(field: string){
    return this.myForm.controls[field].touched && this.myForm.controls[field].errors;
  }

  Save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }

}
