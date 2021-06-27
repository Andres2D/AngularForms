import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchs',
  templateUrl: './switchs.component.html',
  styles: []
})
export class SwitchsComponent {

  person = {
    gender: 'f',
    notifications: true
  }

  abeasData: boolean = false;

}
