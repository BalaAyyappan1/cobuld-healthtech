import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Container } from '../../../../components/container/container';
import { FadeInDirective } from '../../../../shared/fade-in.directive';
import { ToastService } from '../../../../components/toast/toast.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [Container, FormsModule, CommonModule, FadeInDirective],
  templateUrl: './form.html',
})
export class ContactForm {

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  isSubmitting = false;

  constructor(private toast: ToastService) {}

  onSubmit(form: any) {
    if (!form.valid) {
      this.toast.show('Please fill all required fields.', 'error');
      return;
    }

    this.isSubmitting = true;

    const payload = {
      name: this.formData.name,
      email: this.formData.email,
      phone: this.formData.phone,
      message: this.formData.message,
      timestamp: new Date().toISOString()
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwur8JcRgrgrOXAlRfEm0lGmqN7MZgQpouj6CGDfg7CiSc0l2ga9JzrQr8XnJqB1jiY0g/exec';

    fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(() => {
      this.toast.show('Thank you! Your message has been sent successfully.', 'success');
      form.resetForm();
      this.formData = { name: '', email: '', phone: '', message: '' };
    })
    .catch(error => {
      console.error('Error:', error);
      this.toast.show('Something went wrong. Please try again later.', 'error');
    })
    .finally(() => {
      this.isSubmitting = false;
    });
  }
}
