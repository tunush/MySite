import { Component } from '@angular/core';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [NavbarService]
})
export class FooterComponent {

  constructor(private service: NavbarService) {}

  items = this.service.items;

}
