import { Component } from '@angular/core';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-badge1',
  imports: [BadgeModule, OverlayBadgeModule],
  templateUrl: './badge1.component.html',
  styleUrl: './badge1.component.scss'
})
export class Badge1Component {

}
