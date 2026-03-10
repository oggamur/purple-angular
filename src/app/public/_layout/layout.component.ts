import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [RouterOutlet],
})
export class LayoutComponent implements OnInit {
  public router: Router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
  }

  onLoginBtnClick() {
    this.router.navigate(['/private'], {
      queryParams: {
        from: 'auth',
      },
    });
  }

  onInputChange($event: string | null) {
    console.log($event);
  }
}
