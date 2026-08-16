import { Component, inject } from '@angular/core';
import { BackButtonComponent } from "../../components/back-button/back-button.component";
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { SummarizeOrderComponent } from "../../components/summarize-order/summarize-order.component";
import { EcommerceStore } from '../../store/ecommerce.store';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-checkout',
  imports: [BackButtonComponent, ShippingFormComponent, PaymentFormComponent, SummarizeOrderComponent, MatButton],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export default class CheckoutComponent {

  store = inject(EcommerceStore);

}
