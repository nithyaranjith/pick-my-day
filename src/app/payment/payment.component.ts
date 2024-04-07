import { Component } from '@angular/core';
import { MatdialogComponent } from '../matdialog/matdialog.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  isButtonSelected: boolean = false;

  // toggleButtonState() {
  //   this.isButtonSelected = !this.isButtonSelected;
  // }
  
  
}
