import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from 'src/mf_shared_components/components/form/button/button.component';
import { TooltipDirective } from 'src/mf_shared_components/directives/tooltip.directive';
import { SharedModule } from 'src/mf_shared_components/components/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TooltipDirective, ButtonComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard';
}
