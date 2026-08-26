import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { FOOTER_LINKS, SITE } from '../../data/site';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly site = SITE;
  readonly columns = FOOTER_LINKS;
  readonly year = new Date().getFullYear();
}
