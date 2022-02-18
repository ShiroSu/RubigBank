import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currency:any[] = []//{name: string, rate: number}[] = []
  log(smth: any) {
    console.log(smth)
  }
  getCurr():void {
    this.currencyService.getAllCurrencies().subscribe(response=> {
        Object.keys(response.data).map((curr:string)=> {
          if (curr === "USD" || curr === "EUR" || curr === "RUB" || curr === "TRY")
          this.currency.push({name: curr, rate: response.data[curr]})
        })
      }
    )
  }
  
  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.getCurr();
  }
}
