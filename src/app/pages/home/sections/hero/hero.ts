import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { HomeHero } from '../../../../../../assets/home/index';
import { FadeInDirective } from '../../../../shared/fade-in.directive';

@Component({
  selector: 'app-hero',
  imports: [Container, FadeInDirective],
  templateUrl: './hero.html',
})
export class Hero {
  heroImage = HomeHero;
}
