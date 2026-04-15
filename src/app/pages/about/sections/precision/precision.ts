import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { PrecisionImage } from '../../../../../../assets/about';

@Component({
  selector: 'app-about-precision',
  imports: [Container, RouterLink, FadeInDirective],
  templateUrl: './precision.html',
})
export class AboutPrecision {
  PrecisionImage = PrecisionImage
}
