import { Component } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [NavbarService]
})
export class HeaderComponent {
  constructor(private service: NavbarService) {}

  items = this.service.items;

}
