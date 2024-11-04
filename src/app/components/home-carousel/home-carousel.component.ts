import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss',
})
export class HomeCarouselComponent {
  constructor(private router: Router) {}
  navigateToHomeCollection() {
    // Create Book logic
    this.router.navigateByUrl('homecollection');
  }
}
