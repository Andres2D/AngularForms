import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: []
})
export class SwitchsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    notifications: true,
    abeasData: [false, Validators.requiredTrue]
  }); 

  person = {
    gender: 'F',
    notifications: true
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(){
    this.myForm.reset(this.person);

    this.myForm.valueChanges.subscribe( ({abeasData, ...rest}) => {
      this.person = rest;
    });

  }

  Save(){
    const formValue = {...this.myForm.value};
    delete formValue.abeasData;
    this.person = formValue;
    console.log(formValue);
  }

}
