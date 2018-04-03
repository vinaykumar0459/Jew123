import { Component, OnInit } from '@angular/core';
import { CountryService } from './shared/country-service';  
import { Country } from './shared/country';  
import { State } from './shared/state';
import { City } from './shared/city';

@Component({
  selector: 'app-company-creation',
  templateUrl: './company-creation.component.html',
  styleUrls: ['./company-creation.component.scss'],
  providers: [CountryService] 
})
export class CompanyCreationComponent implements OnInit {
  selectedCountry: Country = new Country(0, 'India');  
  countries: Country[];  
  states: State[]; 
  citys: City[];
  constructor(private _countryService: CountryService) {  
    this.countries = this._countryService.getCountries();  
  }  
  onSelect(countryid) {  
      this.states = this._countryService.getStates().filter((item) => item.countryid == countryid);  
  }
  onSelectcity(stateid) {  
    this.citys = this._countryService.getCitys().filter((item) =>
    item.stateid == stateid,
    console.log(stateid)
  );  
}
  
  ngOnInit() {
  //   document.getElementById("uploadBtn").onchange = function () {
  //     document.getElementById("uploadFile").value = this.value.substring(12);
  // };
  }

}
