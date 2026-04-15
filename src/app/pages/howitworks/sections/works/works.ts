import { Component } from '@angular/core';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { WorksIcon1, WorksIcon2, WorksIcon3 } from '../../../../../../assets/works';

@Component({
  selector: 'app-works-steps',
  imports: [FadeInDirective],
  templateUrl: './works.html',
})
export class WorksSteps {
  WorksIcon1 = WorksIcon1
  WorksIcon2 = WorksIcon2
  WorksIcon3 = WorksIcon3
}
