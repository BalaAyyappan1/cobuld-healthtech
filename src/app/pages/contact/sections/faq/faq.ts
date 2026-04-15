import { Component } from '@angular/core';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';

@Component({
  selector: 'app-contact-faq',
  imports: [Container, FadeInDirective],
  templateUrl: './faq.html',
})
export class ContactFaq {
  openIndex: number | null = null;
  showAll = false;

  get visibleFaqs() {
    return this.showAll ? this.faqs : this.faqs.slice(0, 4);
  }

faqs = [
  {
    question: 'Why Donate Blood?',
    answer: "Every two seconds, someone in need requires a blood transfusion. By donating blood, you can save up to three lives. It's a simple act of kindness with a profound impact. Your donation ensures that hospitals and medical centers are prepared for emergencies, surgeries, and patients with chronic illnesses.",
  },
  {
    question: 'Who can donate blood?',
    answer: 'Generally, anyone who is between 18–65 years of age, weighs at least 50 kg, and is in good health can donate blood. Eligibility may vary based on medical history and local guidelines.',
  },
  {
    question: 'How often can I donate blood?',
    answer: 'Generally whole blood adult male donors can donate once every 3 months (90 days) and adult female donors can donate every 4 months. Platelet donors may donate more frequently, up to once every 2 weeks.',
  },
  {
    question: 'Does donating blood hurt?',
    answer: 'You may feel a brief pinch when the needle is inserted, but the process is generally painless. The donation itself takes around 8–10 minutes.',
  },
  {
    question: 'What should I do before donating blood?',
    answer: 'Eat a healthy meal, drink plenty of water, avoid fatty foods, get a good night\'s sleep, and avoid alcohol for at least 24 hours before donating.',
  },
  {
    question: 'How do I request blood for a patient?',
    answer: 'You can submit a blood request through our website by providing the patient\'s name, hospital name, blood group required, number of units needed, and contact details. Our team will connect you with available units as soon as possible.',
  },
  {
    question: 'How quickly can I expect a response to a blood request?',
    answer: 'We aim to respond to urgent requests within a few hours. Response times may vary depending on blood group availability and your location.',
  },
  {
    question: 'What information do I need to submit a blood request?',
    answer: 'You will need the patient\'s name, hospital name and location, blood group and Rh factor (e.g. B+, O−), number of units required, date needed, and a contact number for the person managing the request.',
  },
  {
    question: 'Can I request a specific blood component such as platelets or plasma?',
    answer: 'Yes. You can specify whether you need whole blood, packed red blood cells, platelets, fresh frozen plasma, or other components when submitting your request.',
  },
  {
    question: 'Is my personal information kept confidential?',
    answer: 'Yes. Your personal information is kept strictly confidential and is only shared with verified requestors when you give your consent to be contacted.',
  },
  {
    question: 'Can hospitals and blood banks partner with Coblud?',
    answer: 'Yes. We actively partner with hospitals, clinics, and blood banks. Reach out through our contact form and our partnerships team will get back to you.',
  },
  {
    question: 'Is there a cost to use Coblud?',
    answer: 'Basic access to the platform is free. For institutional or enterprise plans, please contact us for pricing details.',
  }
];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
