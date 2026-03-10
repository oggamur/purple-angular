import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { ClickLoggerDirective } from '../../../shared/directives/click-logger.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: true,
  imports: [ButtonComponent, InputComponent, ClickLoggerDirective],
})
export class LoginComponent implements OnInit {
  public router: Router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);
  message = 'Ghbdtn';

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
  }

  onLoginBtnClick() {
    this.router.navigate(['/private/home'], {
      queryParams: {
        from: 'auth',
      },
    });
  }

  onInputChange($event: string | null) {
    console.log($event);
  }
}
