import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seat-booking',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './seat-booking.component.html',
  styleUrl: './seat-booking.component.css'
})
export class SeatBookingComponent {
  isButtonSelected: boolean = false;
  
    toggleButtonState() {
      this.isButtonSelected = !this.isButtonSelected;
    }
  
};
  
