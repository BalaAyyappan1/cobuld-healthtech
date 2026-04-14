import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../../../components/container/container';
import { PrecisionImage } from '../../../../../../assets/about';

@Component({
  selector: 'app-about-precision',
  imports: [Container, RouterLink],
  templateUrl: './precision.html',
})
export class AboutPrecision {
  PrecisionImage = PrecisionImage
}
