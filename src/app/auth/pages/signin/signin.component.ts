import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { nameLastNamePattern, emailPattern, CantBeStrider } from '../../../shared/validators/validators';
import { ValidatorService } from '../../../shared/validators/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validationService.nameLastNamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validationService.emailPattern)],[this.emailValidator]],
    userName: ['', [Validators.required, this.validationService.CantBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  },
  {
    validators: [this.validationService.EqualsFields('password', 'confirmPassword')]
  });

  get emailErrorMsg(): string{

    if(this.myForm.get('email').errors === null){
      return;
    }

    const errors = this.myForm.get('email').errors;

    if(errors.required){
      return 'The email is required';
    }else if(errors.pattern){
      return 'The email has not the correct format';
    }else if(errors.emailUsed){
      return 'The email is used by another user';
    }

    return '';
  }

  constructor(private fb: FormBuilder, private validationService: ValidatorService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit() {
    this.myForm.reset({
      name: 'Andres Alcaraz',
      email: 'test1@test.com',
      userName: 'Andres2D',
      password: '123',
      confirmPassword: '123'
    })
  }

  InvalidField(field: string){
    return this.myForm.get(field).invalid && this.myForm.get(field).touched;
  }

  SubmitForm(){
    console.log(this.myForm.value);
    this.myForm.markAllAsTouched();
  }

}
