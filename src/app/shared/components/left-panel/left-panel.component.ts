import { Component } from '@angular/core';
import { GenreFilterComponent } from './parts/genre-filter/left-panel-genre-filter.component';
import { SearchComponent } from './parts/search/search.component';
import { SortFilterComponent } from './parts/sort-filter/sort-filter.component';
import { YearFilterComponent } from './parts/year-filter/year-filter.component';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrl: 'left-panel.component.scss',
  standalone: true,
  imports: [SearchComponent, GenreFilterComponent, YearFilterComponent, SortFilterComponent],
})
export class LeftPanelComponent {}
