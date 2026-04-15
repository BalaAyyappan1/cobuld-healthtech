import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';

@Component({
  selector: 'app-home-about',
  imports: [Container, FadeInDirective],
  templateUrl: './about.html',
})
export class HomeAbout {}
