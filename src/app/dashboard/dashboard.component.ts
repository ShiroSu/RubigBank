import { Component } from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tiles: Tile[] = [
    {cols: 3, rows: 1},
    {cols: 1, rows: 2},
    {cols: 1, rows: 1},
    {cols: 2, rows: 1},
  ];
  constructor() { }

}
