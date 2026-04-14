import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';

@Component({
  selector: 'app-contact-faq',
  imports: [Container],
  templateUrl: './faq.html',
})
export class ContactFaq {
  openIndex: number | null = null;

  faqs = [
    {
      question: 'How do I request blood through Coblud?',
      answer:
        'You can submit a blood request directly through our platform by providing the required blood type, quantity, and urgency level. Our system will match you with available donors or blood banks nearby.',
    },
    {
      question: 'Is Coblud available in my city?',
      answer:
        'We are continuously expanding our network. Check our coverage map or contact us to find out if Coblud is active in your area.',
    },
    {
      question: 'How are donors verified?',
      answer:
        'All donors on the Coblud platform go through a verification process that includes identity confirmation and health eligibility checks to ensure safe donations.',
    },
    {
      question: 'Can hospitals and blood banks partner with Coblud?',
      answer:
        'Yes. We actively partner with hospitals, clinics, and blood banks. Reach out through our contact form and our partnerships team will get back to you.',
    },
    {
      question: 'Is there a cost to use Coblud?',
      answer:
        'Basic access to the platform is free. For institutional or enterprise plans, please contact us for pricing details.',
    },
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
