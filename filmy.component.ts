import { Component, OnInit } from '@angular/core';
import {Ksiazki} from "../ksiazki/Ksiazki";
import {Filmy} from "./Filmy";

@Component({
  selector: 'app-filmy',
  templateUrl: './filmy.component.html',
  styleUrls: ['./filmy.component.css']
})
export class FilmyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filmyArray: Filmy[] = [
    new Filmy("2012", "XXX", 2000, 5),
    new Filmy("Wladca Pierscieni", "YYY", 2001, 10),
    new Filmy("Harry Potter i kamien filozoficzny", "ZZZ", 2011, 9)
  ]
}
