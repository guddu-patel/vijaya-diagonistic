import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements AfterViewInit {
  activeMenuId = 1;
  isOtherPage = false;
  constructor(private router: Router, private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        this.isOtherPage = true;
        if (event.url == '/') {
          setTimeout(() => {
            this.isOtherPage = false;
          }, 1);
        }
      }
    });
  }
}
