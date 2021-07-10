import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectorService } from '../../services/selector.service';
import { CountrySmall, Country } from '../../interfaces/countries.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.css']
})
export class SelectorPageComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required]
  });

  //Fill selector
  regions: string[] = [];
  countries: CountrySmall[] = [];
  //borders: string[] = [];
  borders: CountrySmall[] = [];

  //UI
  loading: boolean = false;

  constructor(private fb: FormBuilder, private selectorService: SelectorService) { }

  ngOnInit() {
    this.regions = this.selectorService.regions;

    //When change region
    this.myForm.get('region').valueChanges
    .pipe(
      tap( _ => {
        this.myForm.get('country').reset('');
        this.loading = true;
      }),
      switchMap( region => this.selectorService.GetCountriesByRegion(region))
    )
    .subscribe(countries => {
      this.loading = false;
      this.countries = countries;
    });

    //When change country
    this.myForm.get('country').valueChanges
    .pipe(
      tap( _ => {
        this.borders = [];
        this.myForm.get('border').reset('');
        this.loading = true;
      }),
      switchMap( code => this.selectorService.GetCountryByCode(code)),
      switchMap( country => country ? this.selectorService.GetCountriesByCodes(country.borders) : [])
    )
    .subscribe( countries => {
      console.log(countries);
      this.borders = countries;
      //this.borders = borders.borders;
      this.loading = false;
    })
  }

  Save(){
    console.log(this.myForm.value);
  }

}
