import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { HomeHero } from '../../../../../../assets/home/index';

@Component({
  selector: 'app-hero',
  imports: [ Container],
  templateUrl: './hero.html',
})
export class Hero {
  heroImage = HomeHero;
}
