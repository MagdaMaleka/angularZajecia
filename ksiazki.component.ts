import { Component, OnInit } from '@angular/core';
import {Ksiazki} from "./Ksiazki";

@Component({
  selector: 'app-ksiazki',
  templateUrl: './ksiazki.component.html',
  styleUrls: ['./ksiazki.component.css']
})
export class KsiazkiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ksiazkiArray: Ksiazki[] = [
    new Ksiazki("Pan Tadeusz", "H. Sienkiewicz", 1990, 1000, 10),
    new Ksiazki("Zaginiecie", "R. Mroz", 2016, 360, 8),
    new Ksiazki("Harry Potter i kamien filozoficzny", "J. K. Rowling", 2010, 700, 9)
  ]

}
