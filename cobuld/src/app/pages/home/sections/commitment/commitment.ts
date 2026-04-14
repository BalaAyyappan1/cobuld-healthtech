import { Component } from '@angular/core';

import { Community, Icon1, Icon2, Icon3, Icon4, Trusted } from '../../../../../../assets/home';

@Component({
  selector: 'app-commitment',
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
