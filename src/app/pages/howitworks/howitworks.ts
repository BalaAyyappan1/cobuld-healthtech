import { Component } from '@angular/core';
import { WorksHeroSection } from './sections/hero/hero';
import { WorksSteps } from './sections/works/works';

@Component({
  selector: 'app-howitworks',
  imports: [WorksHeroSection, WorksSteps],
  templateUrl: './howitworks.html',
})
export class HowItWorks {}
