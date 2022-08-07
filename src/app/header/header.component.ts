import { Component } from '@angular/core';

export interface Link {
  routerLink: string;
  title: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  links: Link[] = [
    {routerLink: "/", title: "Home"},
    {routerLink: "/products", title: "Products"},
    {routerLink: "/statistics", title: "Statistics"},
    {routerLink: "/about", title: "About Us"}
  ]
  constructor() { }

}
