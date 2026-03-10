import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-filter',
  templateUrl: './sort-filter.component.html',
  styleUrl: './sort-filter.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class SortFilterComponent {
  sortTypes: string[] = ['По жанру', 'По названию', 'По рейтингу'];
}
