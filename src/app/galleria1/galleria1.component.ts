import { Component,model,OnInit } from '@angular/core';
// import { PhotoService } from '@/service/photoservice';
import { GalleriaModule } from 'primeng/galleria';
@Component({
  selector: 'app-galleria1',
  imports: [GalleriaModule],
  templateUrl: './galleria1.component.html',
  styleUrl: './galleria1.component.scss',
  // providers: [PhotoService]
})
export class Galleria1Component implements OnInit{
  images: any[] = [];

  responsiveOptions: any[] = [
      {
          breakpoint: '1300px',
          numVisible: 4
      },
      {
          breakpoint: '575px',
          numVisible: 1
      }
  ];

  constructor() {}

  ngOnInit() {
    this.images = [
     { itemImageSrc: 'image1.png', thumbnailImageSrc: 'image1.png', alt: 'Image 1', title: 'First Image' },
    { itemImageSrc: 'assets/image2.png', thumbnailImageSrc: 'assets/images/image2.png', alt: 'Image 2', title: 'Second Image' },
      { itemImageSrc: 'assets/image3.png', thumbnailImageSrc: 'assets/images/image3.png', alt: 'Image 3', title: 'Third Image' }
    ];
     
  }
}
