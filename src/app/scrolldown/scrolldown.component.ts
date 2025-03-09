import { Component } from '@angular/core';
import { ScrollTopModule } from 'primeng/scrolltop';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-scrolldown',
  imports: [ScrollTopModule,ButtonModule],
  templateUrl: './scrolldown.component.html',
  styleUrl: './scrolldown.component.scss'
})
export class ScrolldownComponent {

}
