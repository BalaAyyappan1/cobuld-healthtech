import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { WorksHero } from '../../../../../../assets/works/index';

@Component({
  selector: 'app-works-hero',
  imports: [Container],
  templateUrl: './hero.html',
})
export class WorksHeroSection {
  worksHeroImage = WorksHero;
}
