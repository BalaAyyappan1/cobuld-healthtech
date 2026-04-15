import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { DNA } from '../../../../../../assets/home';

@Component({
  selector: 'app-donation-camps',
  imports: [Container, FadeInDirective],
  templateUrl: './donation-camps.html',
})
export class DonationCamps {
  DNA = DNA
}
