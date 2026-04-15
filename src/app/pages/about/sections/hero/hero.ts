import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { AboutHeroImage } from '../../../../../../assets/about/index';

@Component({
  selector: 'app-about-hero',
  imports: [Container, FadeInDirective],
  templateUrl: './hero.html',
})
export class AboutHero {
  aboutImage = AboutHeroImage;
}
