import { Component } from '@angular/core';
import { ContentHeadingComponent } from '../../../shared/components/content-heading/content-heading.component';
import { FilmCardComponent } from '../../../shared/components/film-card/film-card.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
  standalone: true,
  imports: [FilmCardComponent, ContentHeadingComponent],
})
export class FavoritesComponent {}
