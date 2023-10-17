import { Component } from '@angular/core';
import {faBars, faHeart, faUser} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-site-header-top-menu',
  templateUrl: './site-header-top-menu.component.html',
  styleUrls: ['./site-header-top-menu.component.scss']
})
export class SiteHeaderTopMenuComponent {

  protected readonly faHeart = faHeart;
  protected readonly faUser = faUser;
  protected readonly faBars = faBars;
}
