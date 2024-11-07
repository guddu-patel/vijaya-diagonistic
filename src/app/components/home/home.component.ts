import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  popularTests = [
    {
      name: 'Vijaya General Health Check - Basic',
      originalPrice: 3500,
      offerPrice: 2500,
      icon: 'doc-beaker',
      discount: 35,
    },
    {
      name: 'Complete Blood Picture (CBP)',
      originalPrice: 1800,
      offerPrice: 1500,
      icon: 'test (1)',
      discount: 20,
    },
    {
      name: 'Thyroid Stimulating Hormone (TSH)',
      originalPrice: 4000,
      offerPrice: 3000,
      icon: 'test (2)',
      discount: 25,
    },
    {
      name: 'Complete Urine Examination (CUE)',
      originalPrice: 2000,
      offerPrice: 1700,
      icon: 'test (3)',
      discount: 15,
    },
    {
      name: 'Ultrasound - Abdomen',
      originalPrice: 2500,
      offerPrice: 1350,
      icon: 'test (4)',
      discount: 25,
    },
    {
      name: 'Dengue NS1 Antigen - ELISA',
      originalPrice: 2000,
      offerPrice: 1600,
      icon: 'test (5)',
      discount: 25,
    },
  ];
  pills = [
    'General Wellness',
    'Lifestyle',
    'Women Care',
    'Offers',
    'Gynaecology Packes',
  ];
  tabs=[
    'Laboratory Services',
    'Radiology Services',
    'Advanced Radiology Services'
  ]
  activePill = this.pills[0];
  activeTab=this.tabs[0]
}
