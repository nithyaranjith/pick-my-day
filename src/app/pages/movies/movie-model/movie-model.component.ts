import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-model',
  standalone: true,
  imports:[CommonModule, RouterLink],
  templateUrl: './movie-model.component.html',
  styleUrl: './movie-model.component.css'
})
export class MovieModelComponent {

}
