import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-progressspinner1',
  imports: [ProgressSpinnerModule,CommonModule,SkeletonModule],
  templateUrl: './progressspinner1.component.html',
  styleUrl: './progressspinner1.component.scss'
})
export class Progressspinner1Component {
  loadingSp:boolean = true



  ngOnInit(): void {
    console.log('ngOnInit called');
    this.APIcall()
  }

  APIcall(){
    this.loadingSp = true
    setTimeout(() => {
      this.loadingSp = false
    }, 3000)
  }
}
