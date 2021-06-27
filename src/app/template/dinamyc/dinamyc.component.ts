import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  favourites: Favourite[];
}

interface Favourite{
  id: number;
  name: string;
}

@Component({
  selector: 'app-dinamyc',
  templateUrl: './dinamyc.component.html',
  styles: []
})
export class DinamycComponent {

  newGame: string = '';
  
  person: Person = {
    name: '2D',
    favourites: [
      {
        id: 1,
        name: 'Fifa'
      },
      {
        id: 2,
        name: 'Call Of Duty'
      }
    ]
  }

  Save(){
    console.log('POSTED');
  }

  Delete(index: number){
    this.person.favourites.splice(index, 1);
  }

  AddGame(){
    const game: Favourite = {
      id: this.person.favourites.length + 1,
      name: this.newGame
    }

    this.person.favourites.push({...game});
    this.newGame = '';
  }

}
