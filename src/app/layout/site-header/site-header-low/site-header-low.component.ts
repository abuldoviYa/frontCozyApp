import { Component } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {ApiServiceService} from "../../../api-service.service";

@Component({
  selector: 'app-site-header-low',
  templateUrl: './site-header-low.component.html',
  styleUrls: ['./site-header-low.component.scss']
})
export class SiteHeaderLowComponent {
  constructor(private apiService: ApiServiceService) {
  }

    menuContext: any[] = this.apiService.fullMenu()
  protected readonly faBars = faBars;
}
