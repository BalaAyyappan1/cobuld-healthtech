import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { AboutCommitmentImage } from '../../../../../../assets/about';

@Component({
  selector: 'app-about-commitment',
  imports: [Container, FadeInDirective],
  templateUrl: './commitment.html',
})
export class AboutCommitment {
  CommitImage = AboutCommitmentImage
}
