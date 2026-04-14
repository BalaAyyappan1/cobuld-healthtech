import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Container } from '../../../../components/container/container';
import { DNA } from '../../../../../../assets/home';

@Component({
  selector: 'app-donation-camps',
  imports: [Container],
  templateUrl: './donation-camps.html',
})
export class DonationCamps {
  DNA = DNA
}
