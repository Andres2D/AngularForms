import { Component } from '@angular/core';

interface MenuItems{
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class SidemenuComponent {

  templateMenu: MenuItems[] = [
    {
      text: 'Basics',
      route: './template/basics'
    },
    {
      text: 'Dinamycs',
      route: './template/dinamyc'
    },
    {
      text: 'Switchs',
      route: './template/switchs'
    }
  ];

  reactiveMenu: MenuItems[] = [
    {
      text: 'Basics',
      route: './reactive/basics'
    },
    {
      text: 'Dinamycs',
      route: './reactive/dinamyc'
    },
    {
      text: 'Switchs',
      route: './reactive/switchs'
    }
  ];

  validationsMenu: MenuItems[] = [
    {
      text: 'SignIn',
      route: './auth/signin'
    },
    {
      text: 'Login',
      route: './auth/login'
    }
  ];
}
