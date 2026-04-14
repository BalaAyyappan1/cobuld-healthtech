import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { AboutCommitmentImage } from '../../../../../../assets/about';

@Component({
  selector: 'app-about-commitment',
  imports: [Container],
  templateUrl: './commitment.html',
})
export class AboutCommitment {
  CommitImage = AboutCommitmentImage
}
