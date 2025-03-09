import { Component, NgZone,OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-pogressbar1',
  imports: [ProgressBarModule, ToastModule],
  templateUrl: './pogressbar1.component.html',
  styleUrl: './pogressbar1.component.scss',
  providers: [MessageService]
})
export class Pogressbar1Component {

  value: number = 0;

  interval: any;

  constructor(private messageService: MessageService, private ngZone: NgZone) {}

  ngOnInit() {
      this.ngZone.runOutsideAngular(() => {
          this.interval = setInterval(() => {
              this.ngZone.run(() => {
                  this.value = this.value + Math.floor(Math.random() * 10) + 1;
                  if (this.value >= 100) {
                      this.value = 100;
                      this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
                      clearInterval(this.interval);
                  }
              });
          }, 2000);
      });
  }

  ngOnDestroy() {
      if (this.interval) {
          clearInterval(this.interval);
      }
  }
}
