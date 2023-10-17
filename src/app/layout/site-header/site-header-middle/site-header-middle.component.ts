import { Component } from '@angular/core';
import {faSearch} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-site-header-middle',
  templateUrl: './site-header-middle.component.html',
  styleUrls: ['./site-header-middle.component.scss']
})
export class SiteHeaderMiddleComponent {

  protected readonly faSearch = faSearch;
}
