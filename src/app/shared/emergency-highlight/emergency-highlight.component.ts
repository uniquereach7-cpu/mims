import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../core/data/site';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-emergency-highlight',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './emergency-highlight.component.html',
  styleUrl: './emergency-highlight.component.scss'
})
export class EmergencyHighlightComponent {
  readonly site = SITE;
  readonly services = [
    { icon: 'ambulance', title: 'Emergency Care', text: 'Assessment and care for sudden illness and injury.' },
    { icon: 'activity', title: 'Critical Care', text: 'Monitoring and support for serious medical conditions.' },
    { icon: 'stethoscope', title: 'ICU', text: 'Intensive Care Unit' },
    { icon: 'heart', title: 'CICU', text: 'Cardiac Intensive Care Unit' }
  ];
}
