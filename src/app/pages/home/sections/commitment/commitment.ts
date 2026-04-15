import { Component } from '@angular/core';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { Community, Icon1, Icon2, Icon3, Icon4, Trusted } from '../../../../../../assets/home';

@Component({
  selector: 'app-commitment',
  imports: [FadeInDirective],
  templateUrl: './commitment.html',
})
export class Commitment {
  TrustedImage = Trusted
  Icon1 = Icon1
  Icon2 = Icon2
  Icon3 = Icon3
  Icon4 = Icon4
  Community = Community
}
