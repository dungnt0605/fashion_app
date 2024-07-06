import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-website',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout-website.component.html',
})
export class LayoutWebsiteComponent {}
