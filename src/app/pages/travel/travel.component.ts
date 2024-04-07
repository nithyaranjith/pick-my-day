import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BusBookingComponent } from './bus-booking/bus-booking.component';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.css'
})
export class TravelComponent {

}
