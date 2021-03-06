import { Component, OnInit } from '@angular/core';
import { HEROES } from '../_data/mock-heroes';
import { Hero } from '../_interfaces/Hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
