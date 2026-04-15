import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { WorksHero } from '../../../../../../assets/works/index';

@Component({
  selector: 'app-works-hero',
  imports: [Container, FadeInDirective],
  templateUrl: './hero.html',
})
export class WorksHeroSection {
  worksHeroImage = WorksHero;
}
