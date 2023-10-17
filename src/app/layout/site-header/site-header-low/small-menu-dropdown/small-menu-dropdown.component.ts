import {Component, ViewEncapsulation} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule} from "@angular/forms";
import {ApiServiceService} from "../../../../api-service.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-small-menu-dropdown',
  templateUrl: './small-menu-dropdown.component.html',
  styleUrls: ['./small-menu-dropdown.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, FormsModule, NgForOf, NgIf],

  encapsulation: ViewEncapsulation.None
})
export class SmallMenuDropdownComponent {
    constructor(private apiService: ApiServiceService) {
    }

    menuItems = this.apiService.getFullMenu()

  showMenu = false
  onMenu(){
      this.showMenu = !this.showMenu
  }
}


