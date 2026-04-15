import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';

@Component({
  selector: 'app-about-message',
  imports: [Container, FadeInDirective],
  templateUrl: './message.html',
})
export class AboutMessage {}
