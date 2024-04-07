import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theatre-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './theatre-list.component.html',
  styleUrl: './theatre-list.component.css'
})
export class TheatreListComponent {

}
