import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isActive: boolean = false;

  toggle(): void {
    this.isActive = !this.isActive;
  }

  openBlog(): void {
    window.open("https://bloqku.com/", "_blank");
  }
}
