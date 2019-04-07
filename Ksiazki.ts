export class Ksiazki {
  tytul: string;
  autor: string;
  rokWydania: number;
  liczbaStron: number;
  ocenaKsiazki: number;

  constructor(tytul: string, autor: string, rokWydania: number, liczbaStron: number, ocenaKsiazki: number) {
    this.tytul = tytul;
    this.autor = autor;
    this.rokWydania = rokWydania;
    this.liczbaStron = liczbaStron;
    this.ocenaKsiazki = ocenaKsiazki;
  }


}
