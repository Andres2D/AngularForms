import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { CountrySmall, Country } from '../interfaces/countries.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {

  private _regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private baseUrl: string = 'https://restcountries.eu/rest/v2';

  get regions(): string[] {
    return [...this._regions];
  }

  constructor(private http: HttpClient) { }

  GetCountriesByRegion(region: string): Observable<CountrySmall[]>{

    const url: string = `${this.baseUrl}/region/${region}?fields=alpha3Code;name`
    return this.http.get<CountrySmall[]>(url);
  }

  GetCountryByCode(code: string): Observable<Country | null>{
    console.log(code);
    

    if(!code){
      return of(null)
    }

    const url: string = `${this.baseUrl}/alpha/${code}?fields=borders;name` 
    return this.http.get<Country>(url);
  }

  GetCountryByCodeSmall(code: string): Observable<CountrySmall>{
    const url: string = `${this.baseUrl}/alpha/${code}?fields=alpha3Code;name` 
    return this.http.get<CountrySmall>(url);
  }

  GetCountriesByCodes(borders: string[]): Observable<CountrySmall[]>{
    if(!borders){
      return of([]);
    }

    const requests: Observable<CountrySmall>[] = [];

    borders.forEach(code => {
      const request = this.GetCountryByCodeSmall(code);
      requests.push(request);
    });

    return combineLatest( requests );
  }


}
