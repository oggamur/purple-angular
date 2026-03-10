import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrl: './genre-filter.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class GenreFilterComponent {
  genres: string[] = ['Все', 'Мелодрама', 'Фантастика', 'Боевик', 'Триллер', 'Детектив'];
}
