import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currenciesList:any[] = []
  log(smth: any) {
    console.log(smth)
  }
  getCurr():void {
    this.currencyService.getAllCurrencies("AZN").subscribe(response=> {
        Object.keys(response.data).map((curr:string)=> {
          if (["USD", "EUR", "RUB", "TRY"].includes(curr)) //curr === "USD" || curr === "EUR" || curr === "RUB" || curr === "TRY"
          this.currenciesList.push({name: curr, rate: 1/response.data[curr]})
        })
      }
    )
  }
  
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCurr();
  }
}
