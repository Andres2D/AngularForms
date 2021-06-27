import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: []
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm', {static: true}) myForm: NgForm;
  
  initialForm = {
    name: 'Example',
    price: 10,
    stock: 10
  }

  constructor() { }

  ngOnInit() {
  }

  ValidName(): boolean {
    if(this.myForm.controls.name !== undefined){
      return this.myForm.controls.name.touched && this.myForm.controls.name.invalid;
    }else{ 
      return false;
    }
  }

  ValidPrice(): boolean {
    if(this.myForm.controls.price !== undefined){
      return this.myForm.controls.price.touched && this.myForm.controls.price.value < 0; 
    }else{
      return false;
    }
  }

  Save(){
    console.log('Correct POST');
    this.myForm.resetForm({
      name: 'Something',
      price: 0,
      stock: 0
    });
  }

}
