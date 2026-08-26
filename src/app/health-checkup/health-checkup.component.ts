import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PageHeroComponent } from '../shared/page-hero/page-hero.component';
import { CtaBandComponent } from '../shared/cta-band/cta-band.component';
import { IconComponent } from '../shared/icon/icon.component';
import { HEALTH_PACKAGES } from '../core/data/content';

@Component({
  selector: 'app-health-checkup',
  standalone: true,
  imports: [RouterLink, PageHeroComponent, CtaBandComponent, IconComponent],
  templateUrl: './health-checkup.component.html',
  styleUrl: './health-checkup.component.scss'
})
export class HealthCheckupComponent {
  readonly packages = HEALTH_PACKAGES;

  readonly headline = ['Master Health Check-up', 'Executive Health Check-up', 'Comprehensive Health Check-up'];
}
