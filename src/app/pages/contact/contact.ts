import { Component } from '@angular/core';
import { ContactForm } from './sections/form/form';
import { ContactFaq } from './sections/faq/faq';

@Component({
  selector: 'app-contact',
  imports: [ContactForm, ContactFaq],
  templateUrl: './contact.html',
})
export class Contact {}
