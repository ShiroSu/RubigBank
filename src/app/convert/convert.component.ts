import { Component, OnInit } from '@angular/core';
import { Currencies, CurrencyService } from '../currency.service';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.scss']
})
export class ConvertComponent implements OnInit {
  currentCurrency: Currencies = "AZN"
  currenciesList:any[] = []
  
  getCurr():void {
    this.currencyService.getAllCurrencies(this.currentCurrency).subscribe(response=> {
      this.currenciesList = []
        Object.keys(response.data).map((curr:string)=> {
          if (["AZN", "USD", "EUR", "RUB", "TRY"].includes(curr) && curr != this.currentCurrency) //curr === "USD" || curr === "EUR" || curr === "RUB" || curr === "TRY"
          this.currenciesList.push({name: curr, rate: response.data[curr]})
        })
      }
    )
  }

  changeCurrency(curr: Currencies) {
    if (curr != this.currentCurrency)
      this.currentCurrency = curr
    console.log(this.currentCurrency)
    this.getCurr()
  }
  
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCurr();
  }
}
