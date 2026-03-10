import { Component } from '@angular/core';
import { ContentHeadingComponent } from '../../../shared/components/content-heading/content-heading.component';
import { FilmCardComponent } from '../../../shared/components/film-card/film-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ContentHeadingComponent, FilmCardComponent],
  standalone: true,
})
export class HomeComponent {}
