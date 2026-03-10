import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-heading',
  templateUrl: './content-heading.component.html',
  styleUrl: './content-heading.component.scss',
  standalone: true,
})
export class ContentHeadingComponent {
  @Input() title: string | null = 'Привет!';
  @Input() subtitle: string | null = 'Найди фильм на вечер';
}
