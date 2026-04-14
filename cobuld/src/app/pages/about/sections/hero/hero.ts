import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { AboutHeroImage } from '../../../../.././../assets/about/index';

@Component({
  selector: 'app-about-hero',
  imports: [Container],
  templateUrl: './hero.html',
})
export class AboutHero {
  aboutImage = AboutHeroImage;
}
