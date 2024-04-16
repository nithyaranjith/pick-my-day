import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TravelComponent } from '../travel.component';

@Component({
  selector: 'app-bus-booking',
  standalone: true,
  imports: [CommonModule,RouterLink,],
  templateUrl: './bus-booking.component.html',
  styleUrl: './bus-booking.component.css'
})
export class BusBookingComponent {
isviewed : boolean = false;

hideRow : boolean = false;
show : boolean = false;

clicked(){
  this.isviewed = true;
};
toggle(){
  this.hideRow = true;
  this.show = true;
}

    isButtonSelected: boolean = false;
  
    toggleButtonState() {
      this.isButtonSelected = !this.isButtonSelected;
    }
}
